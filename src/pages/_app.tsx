import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider, useTheme } from 'next-themes'
import { globalStyles, lightTheme, darkTheme } from '@theme'
import { ThemeButton } from '@components'

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const current = resolvedTheme || theme

  const toggleTheme = () => {
    setTheme(current === 'light' ? 'dark' : 'light')
  }

  return (
    <>
    <ThemeButton onClick={ toggleTheme } />
    {/* <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 1000,
        cursor: 'pointer',
        border: '1px solid currentColor',
        borderRadius: '9999px',
        padding: '0.5rem 0.75rem',
        fontSize: '0.8rem',
        background: 'transparent',
      }}
    >
      {current === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button> */}
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [checked, setChecked] = useState(false)

  // global styles once
  useEffect(() => {
    globalStyles()
  }, [])

  // gate: only allow pages if unlocked, except /enter and /404
  useEffect(() => {
    const path = router.pathname

    if (path === '/enter' || path === '/404') {
      setChecked(true)
      return
    }

    const unlocked =
      typeof window !== 'undefined' &&
      sessionStorage.getItem('isUnlocked') === 'true'

    if (!unlocked) {
      router.replace('/enter')
      return
    }

    setChecked(true)
  }, [router.pathname])

  if (!checked) return null

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
      enableSystem={false}
      defaultTheme="light"
    >
      <ThemeToggle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp