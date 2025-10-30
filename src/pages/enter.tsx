import { useState } from 'react'
import { styled } from '@theme'
import { useRouter } from 'next/router'
import { Heading, Text, Button } from '@components'

const EnterWrap = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100vw',
  maxHeight: '100dvh',
  height: '100vh'
})

const PwWrap = styled('form', {
  position: 'relative',
  width: 380,
  border: '1px solid $seperator',
  borderRadius: '$r2',

  input: {
    position: 'relative',
    height: 44,
    padding: '0 12px',
    border: '1px solid $border',
    borderRadius: '$r1',
    appearance: 'none',
    outline: 'none',
  }
})  

const PwContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  position: 'relative',
  maxWidth: 350,
  width: '100%',
  margin: '0 auto',
  padding: '50px 32px',
  textAlign: 'center'
})

const PwImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  img: { width: 100 }
})

const PwBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  position: 'relative',
  width: '100%',

  variants: {
    spacing: {
      l1: { gap: 16 }
    }
  }
})

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

    <EnterWrap>
      <PwWrap onSubmit={handleSubmit}>
        <PwContent>
          <PwBlock>
            <PwImage><img src="/ghouls/illus/ghost-trans.png" /></PwImage>
          </PwBlock>

          <PwBlock>
            <Heading bold size="l2" title="Enter password" />
            <Text fontSize="l1">This is a project by Tyler, Kate, Camilo, and Pablo. If you need access to this project, reach out ot the WCP team</Text>
          </PwBlock>

          <PwBlock spacing="l1">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            { error && ( <Heading color='danger' size="l1" title={ error } /> )}

            <Button 
              type="submit"
              width="full"
              size="l1"
              disabled={ loading }
              title={ loading ? '...' : 'Unlock' }
            />
          </PwBlock>
        </PwContent>
      </PwWrap>
    </EnterWrap>
  )
}