import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="border border-t-1 border-x-0 border-stone-950/[0.1] mt-10">
      <div className="container max-w-screen-2xl flex items-center justify-center flex-wrap p-2">
        <Image src={logo} alt="logo" width={50} />
        <span className="ml-2 text-foreground/60">
          Xcel Construction Supply
        </span>
        <h5 className="text-center md:ml-auto text-foreground/60 pt-4 md:pt-0">
          &copy; Copyright XCS | All Rights Reserved {currentYear} | Designed &
          Developed by{" "}
          <Link href="https://github.com/donjheggo" target="_blank" className="font-semibold">
            Donjheggo
          </Link>
        </h5>
      </div>
    </div>
  );
}
