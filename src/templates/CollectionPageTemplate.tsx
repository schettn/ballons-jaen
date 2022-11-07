import {
  CollectionPageData,
  ColllectionPageContext,
  getCollectionStructure
} from '@snek-at/gatsby-theme-shopify'
import {graphql, PageProps} from 'gatsby'

import {Layout} from '../Layout'

const CollectionPageTemplate = (
  props: PageProps<CollectionPageData, ColllectionPageContext>
) => {
  const {relatedProducts} = props.data
  const {shopifyCollection, shopifySubCollections} = props.pageContext

  const buildCollectionPageMeta = () => {
    const {name} = getCollectionStructure(props.pageContext.collectionId)

    if (shopifyCollection && name) {
      const description =
        shopifyCollection.description +
        ' | Unterkategorien: ' +
        shopifySubCollections.nodes.map(n => n.title).join(', ') +
        ' | Weitere Produkte: ' +
        relatedProducts.nodes.map(n => n.title).join(', ')

      return {
        title: name,
        description: description,
        image: shopifyCollection.image?.src
      }
    }
  }

  return (
    <>
      <Layout pathname={props.path} mode={'store'}>
        {/* <CollectionTemplate
          path={props.path}
          shopifyCollection={shopifyCollection}
          subCollections={shopifySubCollections}
          relatedProducts={relatedProducts}
        /> */}
      </Layout>
    </>
  )
}

export const query = graphql`
  query($relatedProductIds: [String!]!) {
    relatedProducts: allShopifyProduct(filter: {id: {in: $relatedProductIds}}) {
      nodes {
        ...shopifyProductData
      }
    }
  }
`

export default CollectionPageTemplate
