import React, { useEffect, useState } from 'react'

import { Media, Settings } from '../../../../payload/payload-types'
import { fetchGlobals } from '../../../_api/fetchGlobals'

import classes from './index.module.scss'

const Paner = () => {
  const [ad, setAd] = useState('')

  let globals: any | null = null
  let paner = null

  useEffect(() => {
    async function awated() {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        globals = await fetchGlobals()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        paner = globals.settings.paner.url
        setAd(paner)
      } catch (error) {
        console.error(error)
      }
    }
    awated()
  }, [])

  return (
    <>
      <div className={classes.image} style={{ backgroundImage: `url(${ad})` }}></div>
    </>
  )
}

export default Paner
