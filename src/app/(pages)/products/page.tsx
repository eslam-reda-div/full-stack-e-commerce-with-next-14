import React from 'react'
import { draftMode } from 'next/headers'

import { Category, Page, Product } from '../../../payload/payload-types'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { ArchiveBlock } from '../../_blocks/ArchiveBlock'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import Filters from './Filters'

import classes from './index.module.scss'

const Products = async () => {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null
  let products: Product[] | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'products',
      draft: isDraftMode,
    })

    categories = await fetchDocs<Category>('categories')
    products = await fetchDocs<Product>('products')
  } catch (error) {
    console.log(error)
  }

  return (
    <div className={classes.container}>
      <Gutter className={classes.products}>
        <Filters categories={categories} />
        {/* <ArchiveBlock
          introContent={products as unknown as { [k: string]: unknown }[]}
          // populateBy={'collection'}
          relationTo="products"
          blockType={'archive'}
          limit={3}
        /> */}
        <Blocks blocks={page?.layout} disableTopPadding={true} />
      </Gutter>
      <HR />
    </div>
  )
}

export default Products
