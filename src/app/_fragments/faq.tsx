"use client";
import { Wrapper } from "@/components";
import { FAQS } from "@/components/data";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useState } from "react";

export default function Faqs() {
  const [activeItems, setActiveItems] = useState<{
    [key: string]: string | null;
  }>({});

  const handleValueChange = (key: string, value: string | null) => {
    setActiveItems((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section id="faqs">
      <Wrapper className="lg:w-[55%] xl:w-[875px] py-[12px]">
        <h1 className="font-bold text-[28px] lg:text-[50px] text-center mb-[25px] lg:mb-[38px]">
          Frequently Asked Questions
        </h1>
        {FAQS.map((faq, index) => (
          <Accordion
            key={index}
            collapsible
            type="single"
            className="bg-white no-underline rounded-[17px] px-5 my-3"
            onValueChange={(value) => handleValueChange(faq.title, value)}
          >
            <AccordionItem value={faq?.title}>
              <AccordionTrigger
                className={`hover:no-underline text-[16px] lg:text-[24px] text-left text-[#1A1A1A] font-medium py-[1.7rem] ${
                  activeItems[faq.title] === faq.title ? "pb-1" : ""
                }`}
              >
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] lg:text-[20px] leading-[20px] lg:leading-[32px] text-left text-[#1A1A1A]/60 mb-0">
                {faq.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </Wrapper>
    </section>
  );
}
