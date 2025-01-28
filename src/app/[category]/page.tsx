import ProductCard from "@/components/product-card";
import { getCategories, getProductsByCategory } from "@/lib/api";

export const dynamicParams = true
export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category: string) => ({
    category: category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{category: string }>;
}) {
  const category = (await params).category
  const products = await getProductsByCategory(category);
  

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 capitalize">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
