import React, { CSSProperties } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Header, Media } from '../../../payload/payload-types'
import { fetchGlobals, fetchHeader } from '../../_api/fetchGlobals'
import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'

export default async function RecoverPassword() {
  let globals: any | null = null
  let paner = null
  let header: Header | null = null
  let logo: Media | null = null

  try {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    globals = await fetchGlobals()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    paner = globals.settings.recoverPasswordImage.url
    // setAd(paner)
    header = await fetchHeader()

    logo = header?.logo as Media
  } catch (error) {
    console.error(error)
  }

  return (
    <section
      className={classes.recoverPassword}
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

          <Link href="/login" className={classes.backLink}>
            <Image src={'/assets/icons/arrow-left.svg'} alt={'back'} width={24} height={24} />
            <p>Back</p>
          </Link>

          <div className={classes.formTitle}>
            <h3>Forgot Password</h3>
          </div>

          <RecoverPasswordForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
