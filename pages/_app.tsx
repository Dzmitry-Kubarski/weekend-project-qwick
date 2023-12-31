import '../css/fonts.css'
import '../css/normalize.css'
import '../css/global.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
