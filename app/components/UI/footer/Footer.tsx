import React from "react";
import Link from "next/link";
import { LinkCategory } from "../linkCategory/LinkCategory";

export const Footer = () => {
  return (
    <footer className="flex justify-around items-center h-[160px] bg-slate-300 mt-8">
      <div>
        <h1 className="text-[1.8rem] font-bold">
          <Link href={"/"}>Coder-Shop</Link>
        </h1>
      </div>

      <LinkCategory />
    </footer>
  );
};
