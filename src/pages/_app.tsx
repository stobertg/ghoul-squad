import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { globalStyles, lightTheme, darkTheme } from '@theme'
import { ThemeProvider } from 'next-themes'
import { SiteContainer } from '@components'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => { 
    globalStyles()
  }, [])

  return (
    
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
      enableSystem={ false }
      defaultTheme="light"
    > 
      <SiteContainer>
        <Component {...pageProps} />
      </SiteContainer>
    </ThemeProvider>
  
  )
}
