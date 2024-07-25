import { AboutImages } from "./about-img";

export default function About() {
  return (
    <div id="about" className="container max-w-screen-2xl mx-auto pt-48">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-stone-700">
        Xcel Construction Supply
      </h1>
      <p className="xl:text-lg xl:px-80 pt-2 text-center text-stone-500">
        Xcel Construction Supply is a dealer of construction & hardware materials,
        electrical & plumbing supplies, paints & chemicals, etc.
      </p>
      <AboutImages />
    </div>
  );
}
