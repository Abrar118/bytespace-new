import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNavigation, type NavigationItem } from "./mobile-navigation";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
] as const satisfies readonly NavigationItem[];

export function Header() {
  return (
    <header className="relative z-40 mx-auto flex h-[104px] max-w-[1200px] items-center justify-between px-5 md:px-8 xl:px-0">
      <a href="#home" aria-label="ByteSpace home">
        <Image
          src="/assets/bytespace-wordmark.png"
          alt="ByteSpace"
          width={171}
          height={37}
          className="h-auto w-[132px] md:w-[171px]"
        />
      </a>

      <nav aria-label="Primary navigation" className="hidden md:block">
        <ul className="flex items-center gap-9 text-[15px] font-medium">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <a
                className="transition-opacity hover:opacity-70"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden items-center gap-7 text-[15px] font-medium md:flex">
        <Link className="transition-opacity hover:opacity-70" href="/login">
          Sign In
        </Link>
        <Link className="transition-opacity hover:opacity-70" href="/signup">
          Join Us
        </Link>
        <ShoppingBag aria-hidden size={19} strokeWidth={1.8} />
      </div>

      <MobileNavigation items={navigationItems} />
    </header>
  );
}
