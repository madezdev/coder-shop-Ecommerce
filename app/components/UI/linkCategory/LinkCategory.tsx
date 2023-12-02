import Link from "next/link";
import { Montserrat } from "next/font/google";

const mon = Montserrat({ subsets: ["latin"] });

const links = [
    { href: "/products/men", label: "Men" },
    { href: "/products/women", label: "Women" },
    { href: "/products/kid", label: "Kids" },
    { href: "/products/unisex", label: "Unisex" },
  ];

export const LinkCategory = () => {
    
    return (
      <div className="flex justify-center items-center gap-4">
        {links.map(({ href, label }) => (
          <div key={`${href}`} className={`${mon.className} font-medium text-[1.2rem] `}>
            <Link 
                href={href}
                className={`px-4 py-2 rounded-md hover:bg-gray-300`}
                >
                    {label}
            </Link>
          </div>
        ))}
      </div>
    )
};