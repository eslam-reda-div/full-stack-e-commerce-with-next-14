import React, { CSSProperties, useEffect, useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Header, Media } from '../../../payload/payload-types'
import { fetchGlobals, fetchHeader } from '../../_api/fetchGlobals'
import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import LoginForm from './LoginForm'

import classes from './index.module.scss'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  // const [ad, setAd] = useState('')

  let globals: any | null = null
  let paner = null
  let header: Header | null = null
  let logo: Media | null = null

  try {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    globals = await fetchGlobals()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    paner = globals.settings.loginImage.url
    // setAd(paner)
    header = await fetchHeader()

    logo = header?.logo as Media
  } catch (error) {
    console.error(error)
  }

  return (
    <section
      className={classes.login}
      style={{ '--mytest-image': `url(${paner})` } as CSSProperties}
    >
      <div className={classes.heroImg} style={{ backgroundImage: `url(${paner})` }}>
        <Link href="/">
          <Image
            src={logo?.url || '/logo-black.svg'}
            width={250}
            height={23}
            alt={'logo'}
            className={classes.logo}
          />
        </Link>
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <RenderParams className={classes.params} />

          <div className={classes.formTitle}>
            <h3>Welcome</h3>
            <Image src={'/assets/icons/hand.png'} alt={'welcome'} width={30} height={30} />
          </div>

          <p>Please login here</p>

          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
