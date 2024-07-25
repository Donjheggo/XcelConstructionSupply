import ProductCards from "./product-cards";

export default function Products() {
  return (
    <div id="products" className="container max-w-screen-2xl mx-auto pt-32">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-stone-700">
        Products
      </h1>
      <p className="xl:text-lg xl:px-80 pt-2 text-center text-stone-500">
        We pride ourselves on being the trusted source for top-notch
        construction materials
      </p>
      <ProductCards />
    </div>
  );
}
