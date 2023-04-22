import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { purple, red } from '@mui/material/colors'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SpinnerLoader from './SpinnerLoader'


const theme = createTheme({
  palette: {
    primary: {
      main: red[800]
    }
  },
})

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <>
      <ThemeProvider theme={theme}>
        {loading ? <SpinnerLoader /> : <Component {...pageProps} />}
      </ThemeProvider>
    </>
  )

}
