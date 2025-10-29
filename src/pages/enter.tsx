import { useState } from 'react'
import { useRouter } from 'next/router'

export default function EnterPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const maxAttempts = 3

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password || password.trim() === '') {
      setError('Enter password')
      return
    }
    setLoading(true)
    setError(null)

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    })

    // lockout case (3 strikes)
    if (res.status === 403) {
      setLoading(false)
      try {
        const data = await res.json()
        if (data.redirect) {
          router.push(data.redirect)
          return
        }
      } catch (_) {
        router.push('/404')
        return
      }
    }

    console.log('Login response status:', res.status)

    setLoading(false)

    if (res.status === 200) {
      try {
        sessionStorage.setItem('isUnlocked', 'true')
      } catch (err) {
        // ignore storage errors (Safari private mode etc.)
      }

      router.push('/')
    } else {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      if (newAttempts < maxAttempts) {
        setError(`Wrong password — ${maxAttempts - newAttempts} attempt${maxAttempts - newAttempts === 1 ? '' : 's'} remaining`)
      }
      setPassword('')
    }
  }

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          border: '1px solid #444',
          borderRadius: '8px',
          padding: '2rem',
          minWidth: '280px',
          maxWidth: '90%',
        }}
      >
        <h1 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>
          Enter password
        </h1>

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            border: '1px solid #888',
            marginBottom: '0.75rem',
          }}
        />

        {error && (
          <div style={{ color: 'red', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            border: '1px solid #000',
            background: '#000',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          {loading ? '...' : 'Unlock'}
        </button>
      </form>
    </main>
  )
}