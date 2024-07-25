import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="bg-grid-stone-900/[0.05]">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
