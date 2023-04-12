import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: red[500]
    }
  },
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )

}
