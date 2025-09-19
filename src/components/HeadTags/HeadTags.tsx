import React from 'react'
import Head from 'next/head'

export const HeadTags = () => {
  return(

    <Head>
      <title>Ghoul Squad</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, minimal-ui" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="400" />
      <meta name="description" content="Ghoul Squad" />
      <meta name="keywords" content="Ghoul Squad" />
      <meta name="author" content="Ghoul Squad" />
      <meta name="apple-mobile-web-app-title" content="Ghoul Squad" />
      <meta name="googlebot" content="index, follow" />
      <meta property="og:title" content="Ghoul Squad" />
      <meta property="og:image" content="/" />
      <meta property="og:site_name" content="Ghoul Squad" />
      <meta property="og:url" content="https://www.ghoulsquad.com/" />
      <meta property="og:description" content="Ghoul Squad" />
      <meta property="og:type" content="website" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#2b2b2b" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </Head>

  )
}