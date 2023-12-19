import React, { CSSProperties } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Header, Media } from '../../../payload/payload-types'
import { fetchGlobals, fetchHeader } from '../../_api/fetchGlobals'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'

import classes from './index.module.scss'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  let globals: any | null = null
  let paner = null
  let header: Header | null = null
  let logo: Media | null = null

  try {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    globals = await fetchGlobals()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    paner = globals.settings.SignUpImage.url
    // setAd(paner)
    header = await fetchHeader()

    logo = header?.logo as Media
  } catch (error) {
    console.error(error)
  }

  return (
    <section
      className={classes.createAccount}
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
            <h3>Create Account</h3>
            <Image src={'/assets/icons/hand.png'} alt={'welcome'} width={30} height={30} />
          </div>

          <p>Please enter details</p>

          <CreateAccountForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
