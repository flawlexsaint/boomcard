import { cn } from "@/lib/utils";
import { Wrapper } from "@/components";
import { FOOTER_ITEMS } from "@/components/data";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Wrapper className="py-[12px] lg:py-[56px]">
      <div className="flex justify-center mb-7">
        <ul role="menubar" className="flex items-center">
          {FOOTER_ITEMS.map((item, i) => (
            <li role="none" className={cn("px-4 lg:px-7", item?.style)} key={i}>
              {item?.type === "text" && (
                <Link
                  href={item.route}
                  className="font-bold text-[14px] lg:text-[20px]"
                >
                  {item?.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Wrapper className="lg:w-[65%] xl:w-[928px]">
        <p className="text-center text-[14px] lg:text-[18px]">
          © {new Date().getFullYear()} BoomCard All Rights Reserved <br /> The
          BoomCard Visa® Card is issued by our partner Financial Institutions,
          pursuant to a license from Visa.
          <span className="hidden md:block">
            Cards may be spent across 40M+ merchants that accept Visa cards.
            Some restrictions apply. See 
            <Link href="/terms-conditions">Terms & Conditions</Link> for
            details.
          </span>
          <span className="block md:hidden">
            <br />
            Cards may be spent across 40M+ merchants that accept Visa cards.
            Some restrictions apply. See 
            <Link href="/terms-conditions">Terms & Conditions</Link> for
            details.
          </span>
        </p>
      </Wrapper>
    </Wrapper>
  );
}
