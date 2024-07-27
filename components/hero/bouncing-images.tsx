"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const images = [
  {
    src: "/images/hero/hammer.png",
    className: "absolute bottom-16 left-10 md:left-28",
  },
  {
    src: "/images/hero/paint.png",
    className: "absolute bottom-16 right-10 md:right-28",
  },
  {
    src: "/images/hero/saw.png",
    className: "absolute top-56 left-0",
  },

  {
    src: "/images/hero/brush.png",
    className: "absolute top-56 right-0",
  },
];

export default function BouncingImages() {
  return (
    <motion.div
      animate={{
        y: ["0", "2rem", "0"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeOut",
      }}
    >
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
    </motion.div>
  );
}
