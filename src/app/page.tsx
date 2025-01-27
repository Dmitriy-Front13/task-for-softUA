import { fetchInstance } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const categories = await fetchInstance('products/categories');
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Product Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category: string, index: number) => (
           <Link
           key={category}
           href={`/category/${category}`}
           className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
         >
           <Image
             src={`/${index + 1}.jpg`}
             alt={category}
             fill
             className="object-cover transition-transform group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-black/40 flex items-end p-4">
             <h2 className="text-white font-semibold">{category}</h2>
           </div>
         </Link>
        ))}
      </div>
    </>
  );
}
