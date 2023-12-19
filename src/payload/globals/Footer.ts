import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'copyright',
      type: 'text',
      label: 'CopyRight',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      label: 'logo',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'footerNavItems',
      type: 'array',
      label: 'Footer Blocks Items',
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
        },
        {
          name: 'logo',
          type: 'upload',
          label: 'logo',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
