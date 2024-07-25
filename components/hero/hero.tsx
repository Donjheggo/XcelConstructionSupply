import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Hero() {
  return (
    <div className="h-[40rem] container max-w-screen-2xl flex items-center justify-center">
      <div className="flex flex-col">
        <TextGenerateEffect
          textColor="text-stone-700"
          words="Your One-Stop Shop for"
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-center "
        />
        <TextGenerateEffect
          textColor="text-[#ffaf14]/90"
          words="Quality Construction Materials"
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-center "
        />
      </div>
    </div>
  );
}
