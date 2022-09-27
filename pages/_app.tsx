import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>lottie web worker test</title>
      </Head>
      {/* FIXME: using lottie.min.js cannot run `lottie.useWebWorker(true)` */}
      {/*<Script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.9.6/lottie.min.js" strategy='beforeInteractive'/>*/}
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.9.6/lottie.js' strategy='beforeInteractive' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
