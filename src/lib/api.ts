const API_URL = "https://fakestoreapi.com"

export async function getCategories() {
  const response = await fetch(`${API_URL}/products/categories`)
  return response.json()
}

export async function getProductsByCategory(category: string) {
  const response = await fetch(`${API_URL}/products/category/${category}`)
  return response.json()
}
