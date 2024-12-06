"use client";
import { cn } from "@/lib/utils";
import { LOGO } from "../../../public/assets/icon";
import { Button, Wrapper } from "@/components";
import { MOBILE_NAV_ITEMS, NAV_ITEMS } from "@/components/data";
import { HamburgerButton } from "@/app/_fragments";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const toggleHamburger = () => setShow(!show);
  return (
    <Wrapper>
      {/* DESKTOP NAVIGATION */}
      <nav className="h-[5.5rem] flex justify-between items-center relative">
        <Image src={LOGO} alt="boomcard logo" width={180} height={40} />
        <ul role="menubar" className="hidden lg:flex items-center">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={i}
              role="none"
              className={cn("px-10 last:pe-0", item?.style)}
            >
              {item?.type === "text" && (
                <Link href={item.route} className="font-medium">
                  {item?.title}
                </Link>
              )}
              {item?.type === "button" && (
                <Button variant="onboarding" className="h-[48px] w-[144px]">
                  {item?.title}
                </Button>
              )}
            </li>
          ))}
        </ul>
        <span className="lg:hidden" onClick={toggleHamburger}>
          <HamburgerButton isOpen={show} toggleHamburger={toggleHamburger} />
        </span>
      </nav>
      {/* MOBILE NAVIGATION */}
      {show && (
        <Wrapper className="lg:hidden absolute left-0 right-0 w-100%">
          <ul role="menubar" className="bg-[#F4F4F0]">
            {MOBILE_NAV_ITEMS.map((item, i) => (
              <li key={i} role="none" className="w-full py-4 last:pt-0">
                {item?.type === "text" && (
                  <Link
                    href={item.route}
                    className="font-medium"
                    onClick={toggleHamburger}
                  >
                    {item?.title}
                  </Link>
                )}
                {item?.type === "button" && (
                  <Button
                    className="h-[48px] w-full"
                    variant={
                      item.title === "Get Started" ? "onboarding" : "ghost"
                    }
                    onClick={toggleHamburger}
                  >
                    {item?.title}
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </Wrapper>
      )}
    </Wrapper>
  );
}
