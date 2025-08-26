import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { navbarConfig } from "@/config/navbar";
import { NavItemGitHub } from "./nav-item-github";
import { ModeToggle } from "../theme/mode-toggle";


export const Navbar = () => {
  return (
    <Container className="sticky top-0 z-20 rounded-md backdrop-blur-sm">
      <div className="flex items-center justify-between  px-1.5 py-2">
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="h-8 w-8 rounded-full border border-gray-200"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          {navbarConfig.navItems.map((item) => (
            <Link
              className="font-mono transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
              href={item.href}
              key={item.title}
            >
              {item.title}
            </Link>
          ))}

          <div className="flex items-center gap-2">
            <NavItemGitHub/>
            <ModeToggle/>
          </div>
        </div>
      </div>
    </Container>
  );
};
