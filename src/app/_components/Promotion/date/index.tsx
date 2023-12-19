import React, { useEffect, useState } from 'react'

import { Media, Settings } from '../../../../payload/payload-types'
import { fetchGlobals } from '../../../_api/fetchGlobals'

import classes from './index.module.scss'

const DatePaner = () => {
  const [targetDate, setDate] = useState<Date>()

  let globals: any | null = null
  let content = null

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  let timerInterval: any = null

  useEffect(() => {
    new Promise<void>(async resolve => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      globals = await fetchGlobals()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      content = await globals.settings.date
      if (!isNaN(Number(new Date(content)))) {
        setDate(new Date(content))
      }
      resolve()
    })
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timerInterval = setInterval(() => {
      if (!isNaN(Number(targetDate))) {
        const currentTime = new Date()
        const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        setTime({ days, hours, minutes, seconds })

        if (timeDifference === 0) {
          clearInterval(timerInterval)
        }
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval)
    }
  }, [targetDate])

  return (
    <>
      <ul className={classes.stats}>
        <StatBox label="Days" value={time.days} />
        <StatBox label="Hours" value={time.hours} />
        <StatBox label="Minutes" value={time.minutes} />
        <StatBox label="Seconds" value={time.seconds} />
      </ul>
    </>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default DatePaner
