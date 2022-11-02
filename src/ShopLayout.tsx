import {Button} from '@chakra-ui/react'
import React from 'react'

import {BasketDrawerProvider, useBasket} from './services/basket'

interface LayoutProps {
  path: string
  children: React.ReactNode
}

const OpenBasketButton = () => {
  const {onOpen} = useBasket()

  return (
    <Button onClick={onOpen} variant="ghost">
      Open Basket
    </Button>
  )
}

export const Layout = ({path, children}: LayoutProps) => {
  return (
    <BasketDrawerProvider>
      {/* <HeaderContainer path={path} /> */}


      {children}

      {/* <Footer
        col1h={'AGT'}
        col1={[
          <Link as={GatsbyLink} to={'/'}>
            Startseite
          </Link>,
          <Link as={GatsbyLink} to={'/products'}>
            Produkte
          </Link>,
          <Link as={GatsbyLink} to={'/contact'}>
            Kontakt
          </Link>
        ]}
        col2h="Rechtliches"
        col2={[
          <Link as={GatsbyLink} to={'/imprint'}>
            Impressum
          </Link>,
          <Link as={GatsbyLink} to={'/privacy'}>
            Datenschutz
          </Link>,
          <Link as={GatsbyLink} to={'/sitemap/sitemap-index.xml'}>
            Sitemap
          </Link>
        ]}
        col3h="Öffnungszeiten"
        col3={[
          'Mo. – Fr. 8.00 – 12.00 / 14.00 – 18.00',
          'Sonn, Sams- und Feiertags geschlossen'
        ]}
      /> */}
    </BasketDrawerProvider>
  )
}
