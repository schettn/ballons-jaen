import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'

import {ProductTemplate} from '../ProductTemplate'
import data from './data'

export default {
  title: 'Components/Templates/ProductTemplate',
  component: ProductTemplate,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof ProductTemplate>

const Template: ComponentStory<typeof ProductTemplate> = args => (
  <ProductTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {
  shopifyProduct: data.shopifyProduct,
  relatedProducts: data.relatedProducts,
  path: `/products/${data.shopifyProduct.handle}`
}

export const NotAvailable = Template.bind({})
NotAvailable.args = {
  shopifyProduct: {
    ...data.shopifyProduct,
    variants: [
      {
        ...data.shopifyProduct.variants[0],
        availableForSale: false
      }
    ]
  },
  relatedProducts: data.relatedProducts,
  path: `/products/${data.shopifyProduct.handle}`
}

export const Filled = Template.bind({})
Filled.args = {
  shopifyProduct: {
    ...data.shopifyProduct,
    metafields: [
      {
        key: 'filling',
        namespace: 'details',
        value: 'Geeignet für Luft- und Heliumfüllung'
      }
    ]
  },
  relatedProducts: data.relatedProducts,
  path: `/products/${data.shopifyProduct.handle}`
}
