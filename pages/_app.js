import '../styles/globals.css'
import '../styles/stackoverflow-light.css'
import { ThemeProvider } from 'next-themes'

function NewInLaravel({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute={'class'}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default NewInLaravel
