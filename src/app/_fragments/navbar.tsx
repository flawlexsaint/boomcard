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
    <Wrapper className="mb-[5.5rem]">
      <section id="home">
        {/* DESKTOP NAVIGATION */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#F4F4F0]">
          <Wrapper className="flex justify-between items-center h-[5.5rem]">
            <Link href="/#home">
              <Image src={LOGO} alt="boomcard logo" width={180} height={40} />
            </Link>
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
              <HamburgerButton
                isOpen={show}
                toggleHamburger={toggleHamburger}
              />
            </span>
          </Wrapper>
        </nav>
        {/* MOBILE NAVIGATION */}
        {show && (
          <nav className="lg:hidden fixed left-0 right-0 bg-[#F4F4F0] w-full top-[5.5rem] z-40">
            <Wrapper className="">
              <ul role="menubar">
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
          </nav>
        )}
      </section>
    </Wrapper>
  );
}
