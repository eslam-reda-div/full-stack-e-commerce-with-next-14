'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Button } from '../Button'
import DatePaner from './date'
import Paner from './paner'
import TextContent from './textContent'

import classes from './index.module.scss'

const Promotion = () => {
  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          <TextContent />
        </p>

        <DatePaner />

        <Button
          className={classes.viewProducts}
          href={'/products'}
          label={'View Products'}
          appearance="primary"
        />
      </div>

      <Paner />
    </section>
  )
}

export default Promotion
