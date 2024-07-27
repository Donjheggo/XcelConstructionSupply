import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Products from "@/components/products/products";
import Address from "@/components/address/address";

export default function Home() {
  return (
    <main className="bg-grid-stone-900/[0.05]">
      <Header />
      <Hero />
      <About />
      <Products />
      <Address />
      <Footer />
    </main>
  );
}
