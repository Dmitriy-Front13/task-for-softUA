import Link from "next/link";
import Cart from "./cart";

export default function Header() {
  return (
    <header className="container mx-auto p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        E-commerce
      </Link>
      <Cart />
    </header>
  );
}
