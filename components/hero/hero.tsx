import { TextGenerateEffect } from "../ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import ShimmerButton from "@/components/ui/shimmer-button";

const images = [
  {
    src: "/images/hero/hammer.png",
    className: "absolute top-20 left-20",
  },
  {
    src: "/images/hero/paint.png",
    className: "absolute top-20 right-24",
  },
  {
    src: "/images/hero/saw.png",
    className: "absolute bottom-0",
  },
  {
    src: "/images/hero/flatscrew.png",
    className: "absolute bottom-20 left-10",
  },
  {
    src: "/images/hero/brush.png",
    className: "absolute bottom-20 right-10",
  },
];

export default function Hero() {
  return (
    <div className="h-[40rem] container max-w-screen-2xl flex items-center justify-center relative">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt="hero-images"
          width={100}
          height={100}
          className={cn("w-16 md:w-24", image.className)}
        />
      ))}
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
