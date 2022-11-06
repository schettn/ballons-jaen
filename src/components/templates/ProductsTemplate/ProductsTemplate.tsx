import {Box, Center, Spinner} from '@chakra-ui/react'
import {
  ProductsPageContext,
  ShopifyProduct
} from '@snek-at/gatsby-theme-shopify'
import React from 'react'

import {ProductGrid} from '../../molecules/ProductGrid'
import SimpleCategorySidebar from './ProductsPageShell'

enum SpecialTagOptions {
  ProductType = 'Typ',
  Vendor = 'Hersteller'
}

export function buildAllTags(
  filters:
    | ProductsTemplateProps['filters']
    | ProductsTemplateProps['activeFilters']
) {
  return [
    ...(filters?.tags || []),
    ...(filters?.vendors?.map(
      vendor => `${SpecialTagOptions.Vendor}:${vendor}`
    ) || []),
    ...(filters?.productTypes?.map(
      productType => `${SpecialTagOptions.ProductType}:${productType}`
    ) || [])
  ]
}

export function splitAllTags(tags: string[]) {
  const productTypeTags = []
  const vendorTags = []
  const otherTags = []

  for (const tag of tags) {
    if (tag.startsWith(SpecialTagOptions.ProductType + ':')) {
      const [, productType] = tag.split(':')

      if (productType) productTypeTags.push(productType)
    } else if (tag.startsWith(SpecialTagOptions.Vendor + ':')) {
      const [_, vendor] = tag.split(':')
      if (vendor) vendorTags.push(vendor)
    } else {
      if (tag) otherTags.push(tag)
    }
  }
  return {otherTags, productTypeTags, vendorTags}
}

export interface ProductsTemplateProps {
  path: string
  products: ShopifyProduct[]
  filters: {
    tags: ProductsPageContext['tags']
    vendors: ProductsPageContext['vendors']
    productTypes: ProductsPageContext['productTypes']
    minPrice: ProductsPageContext['minPrice']
    maxPrice: ProductsPageContext['maxPrice']
  }
  activeFilters: Partial<ProductsTemplateProps['filters']>
  isFetching: boolean
  fetchNextPage: () => void
  updateFilter: (filter: ProductsTemplateProps['activeFilters']) => void
  sortOptions: string[]
  onSortChange: (sort: string) => void
}

export const ProductsTemplate = (props: ProductsTemplateProps) => {
  const gridRef = React.useRef<HTMLDivElement>(null)

  console.log(`products`, props.products)

  React.useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const yOfDivEnd = gridRef.current.getBoundingClientRect().bottom

        const currentScroll = window.pageYOffset + window.innerHeight

        console.log(yOfDivEnd, currentScroll)

        if (yOfDivEnd < currentScroll) {
          props.fetchNextPage()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [props.fetchNextPage])

  const updateTags = (tags: string[]) => {
    const {otherTags, productTypeTags, vendorTags} = splitAllTags(tags)

    props.updateFilter({
      tags: otherTags,
      productTypes: productTypeTags,
      vendors: vendorTags
    })
  }

  const allTags = buildAllTags(props.filters)

  const allActiveTags = buildAllTags(props.activeFilters)

  return (
    <SimpleCategorySidebar
      allTags={allTags}
      activeTags={allActiveTags}
      onActiveTagsChange={updateTags}
      sortOptions={props.sortOptions}
      onSortChange={props.onSortChange}>
      <Box w="100%" p={2} ref={gridRef}>
        <ProductGrid
          products={props.products}
          minChildWidth="250px"
          columns={{base: 2, sm: 3, md: 3, lg: 4, xl: 5}}
          spacing={2}
        />
        {props.isFetching && (
          <Center w="100%" h="xs">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="agt.blue"
              size="xl"
            />
          </Center>
        )}
      </Box>
    </SimpleCategorySidebar>
  )
}
