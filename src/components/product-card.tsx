"use client";

import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/lib/api";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleOpen = useCartStore((state) => state.toggleOpen);

  return (
    <Card className="flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-fit transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{product.title}</CardTitle>
        <CardDescription>{product.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="mt-2 text-xl font-bold">${product.price}</p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => {
            addToCart(product);
            toggleOpen();
          }}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
