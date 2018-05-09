import React, { Fragment } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children, title = 'Nextjs Starter'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='stylesheet' href='/_next/static/style.css' />
        <link rel="stylesheet" href="./static/stylesheets/nprogress.css"/>
      </Head>
      {
        children
      }
    </>
  )
}