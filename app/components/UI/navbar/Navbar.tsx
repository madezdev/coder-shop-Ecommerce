'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Montserrat } from "next/font/google";
import { LinkCategory } from "../linkCategory/LinkCategory";
import { Cart, Menu, Search } from "../Icons";

const mon = Montserrat({ subsets: ["latin"] });

const links = [
  { href: "/search", label: "Search", icon: <Search className="text-[1.6rem]"/> },
  { href: "/cart", label: "Cart", icon: <Cart className="text-[1.6rem]"/> },
  { href: "", label: "Menu" , icon: <Menu className="text-[1.6rem]"/>},
];

export const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className="h-[140px] flex flex-col justify-center">
      <div className="flex items-center justify-between pb-8">
        <div>
          <h1 className="text-[1.8rem] font-bold">
            <Link href={"/"}>
              Coder-Shop
            </Link>
            </h1>
        </div>
        <div className="flex gap-8">
            {
              links.map(({ href, icon }) => {
                const isActive = pathname === href;
                return (
                  <div key={`${href}`} className={`${mon.className} font-medium text-[1.2rem] `}>
                    <Link 
                        href={href}
                        className={` ${isActive ? "bg-gray-300" : ""}`}
                        >
                            {icon}
                    </Link>
                  </div>
                )
              })
            }
        </div>
      </div>
        <LinkCategory />  
    </nav>
  );
};
