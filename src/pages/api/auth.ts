import type { NextApiRequest, NextApiResponse } from 'next'
import * as cookie from 'cookie'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { password } = req.body

  // Fail fast if SITE_PASSWORD not set
  if (!process.env.SITE_PASSWORD) {
    console.error('[AUTH ERROR] Missing SITE_PASSWORD in environment')
    return res.status(500).json({ error: 'Server misconfiguration' })
  }

  // Reject empty or whitespace-only password
  if (!password || password.trim() === '') {
    return res.status(401).json({ ok: false })
  }

  // read current attempt count from cookie (default 0)
  const cookies = cookie.parse(req.headers.cookie || '')
  const attempts = parseInt(cookies['login_attempts'] || '0', 10)

  if (password === process.env.SITE_PASSWORD) {
    res.setHeader('Set-Cookie', [
      cookie.serialize('site_auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      }),
      cookie.serialize('login_attempts', '0', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      }),
    ])

    return res.status(200).json({ ok: true })
  }

  // ❌ wrong password
  const newAttempts = attempts + 1

  // update the attempts cookie
  res.setHeader('Set-Cookie', cookie.serialize('login_attempts', String(newAttempts), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  }))

  // if it's the 3rd bad try, send them to /404
  if (newAttempts >= 3) {
    // reset attempts immediately so they can try again after coming back
    res.setHeader('Set-Cookie', [
      cookie.serialize('login_attempts', '0', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      }),
    ])

    return res.status(403).json({ redirect: '/404' })
  }

  // otherwise just wrong password, keep them on /enter
  return res.status(401).json({ ok: false })
}