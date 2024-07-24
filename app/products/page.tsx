import Header from "@/components/home/header";
import ProductCard from "@/components/products/product-card";
import SearchProduct from "@/components/products/search-product";
import ProductPagination from "@/components/products/product-pagination";

export default function ProductPage() {
  const totalProducts = 100;
  const items_per_page = 18;
  const totalPages = totalProducts / items_per_page;

  return (
    <div className="bg-grid-stone-900/[0.05]">
      <Header />
      <div className="container max-w-screen-2xl mx-auto flex flex-col justify-center mt-2">
        <SearchProduct />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 my-2">
          {Array(18)
            .fill("")
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </div>
        <div className="my-2">
          <ProductPagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
