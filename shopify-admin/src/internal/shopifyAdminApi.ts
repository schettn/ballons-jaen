class ShopifyAdminApi {
  private readonly apiVersion = "2022-01"
  private readonly shop: string
  private readonly accessToken: string

  private async get(path: string): Promise<any> {
    const url = `https://${this.shop}/admin/api/${this.apiVersion}${path}`
    const response = await fetch(url, {
      headers: {
        "X-Shopify-Access-Token": this.accessToken,
      },
    })
    const json = (await response.json()) as object & { errors: string }

    if (json.errors) {
      throw new Error(json.errors)
    }

    return json
  }

  private async post(path: string, body: any): Promise<any> {
    const url = `https://${this.shop}/admin/api/${this.apiVersion}${path}`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "X-Shopify-Access-Token": this.accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    return response.json()
  }

  constructor(accessToken: string) {
    console.log(process.env.MYSHOPIFY_URL)

    this.shop = process.env.MYSHOPIFY_URL!!
    this.accessToken = accessToken
  }

  public async getProductsCount(): Promise<number> {
    const products = await this.get("/products/count.json")
    return products
  }

  public async getProducts(): Promise<any> {
    const products = await this.get("/products.json")
    return products
  }

    public async createProduct(product: any): Promise<any> {
    const products = await this.post("/products.json", product)
    return products
    
    }
}

export default ShopifyAdminApi
