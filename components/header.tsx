"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Header() {
  const [scroll, setScroll] = useState<boolean>(false);

  // add background to header when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navlinks = [
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "How to order", href: "/#how-to-order" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-border/40 ${
        scroll
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-screen-2xl flex items-center h-14">
        <div className="mr-4 flex">
          <Link className="space-x-2 mr-2 lg:mr-6" href="/">
            <Image src={logo} alt="nav-logo" width={50} />
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            {navlinks.map((item, index) => (
              <Link
                key={index}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
