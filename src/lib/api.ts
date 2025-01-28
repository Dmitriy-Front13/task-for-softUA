export async function fetchInstance(url: string) {
  const response = await fetch(`https://fakestoreapi.com/${url}`, {
    next: { revalidate: false },
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}

export async function getCategories() {
  return fetchInstance('products/categories')
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return fetchInstance(`products/category/${category}`)
}