import { fn } from "./factory"
import ShopifyAdminApi from "./internal/shopifyAdminApi.js"

const validateSecret = fn<{ accessToken: string }, boolean>(
  async args => {
    const api = new ShopifyAdminApi(args.accessToken)

    const products = await api.getProductsCount()

    console.log(products)

    return true
  },
  {
    name: "validateSecret",
  }
)

export default validateSecret

// SPDX-License-Identifier: (EUPL-1.2)
// Copyright © 2019-2022 snek.at
