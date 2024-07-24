import Header from "@/components/home/header";
import Body from "@/components/home/body";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main className="bg-grid-stone-900/[0.05]">
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
