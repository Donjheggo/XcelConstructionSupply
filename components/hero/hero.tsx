import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FaArrowDown } from "react-icons/fa";
import ShimmerButton from "@/components/ui/shimmer-button";
import BouncingImages from "./bouncing-images";

export default function Hero() {
  return (
    <div className="h-[40rem] container max-w-screen-2xl flex items-center justify-center">
      <div className="flex flex-col">
        <BouncingImages />
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
        <div className="flex justify-center pt-3">
          <a href="/#products">
            <ShimmerButton
              shimmerColor="#ffaf14e6"
              background="#44403c"
              className="hover:translate-x-2 transition duration-200"
            >
              View Products <FaArrowDown className="pl-2 text-xl" />
            </ShimmerButton>
          </a>
        </div>
      </div>
    </div>
  );
}
