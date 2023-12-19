import React, { useEffect, useState } from 'react'

import { Media, Settings } from '../../../../payload/payload-types'
import { fetchGlobals } from '../../../_api/fetchGlobals'

import classes from './index.module.scss'

const TextContent = () => {
  const [text, setText] = useState('')

  let globals: any | null = null
  let content = null

  useEffect(() => {
    async function awated() {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        globals = await fetchGlobals()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        content = globals.settings.promotionContent
        setText(content)
      } catch (error) {
        console.error(error)
      }
    }
    awated()
  }, [])

  return <>{text}</>
}

export default TextContent
