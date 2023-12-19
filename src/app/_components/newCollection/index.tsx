import React from 'react'
import { draftMode } from 'next/headers'

import { Category, Page, Product } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { ArchiveBlock } from '../../_blocks/ArchiveBlock'
import { Blocks } from '../Blocks'

import classes from './index.module.scss'

const NewCollection = async () => {
  const { isEnabled: isDraftMode } = draftMode()

  let products: Product[] | null = null

  try {
    products = await fetchDocs<Product>('products')
  } catch (error) {
    console.log(error)
  }

  return (
    <div>
      <h3 className={classes.title}>New Collections</h3>
      <ArchiveBlock
        introContent={products as unknown as { [k: string]: unknown }[]}
        relationTo="products"
        blockType={'archive'}
        limit={3}
      />
    </div>
  )
}

export default NewCollection
