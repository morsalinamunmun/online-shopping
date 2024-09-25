import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/products";

export default function Home() {
  return (
    <main className=" min-h-screen p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
     <Banner/>
     <Products/>
    </main>
  );
}
