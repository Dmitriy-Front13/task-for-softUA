export async function fetchInstance(url: string) {
  const response = await fetch(`https://fakestoreapi.com/${url}`, {
    next: { revalidate: false },
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}
