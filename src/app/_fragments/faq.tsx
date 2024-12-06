import { Wrapper } from "@/components";
import { FAQS } from "@/components/data";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function Faqs() {
  return (
    <Wrapper className="lg:w-[55%] 3xl:w-[55%] 4xl:w-[50%] 5xl:w-[45%] 6xl:w-[30%] py-[12px] lg:py-[56px">
      <h1 className="font-bold text-[28px] lg:text-[50px] text-center mb-[25px] lg:mb-[38px]">
        Frequently Asked Questions
      </h1>
      {FAQS.map((faq, key) => (
        <Accordion
          key={key}
          collapsible
          type="single"
          className="bg-white no-underline rounded-[17px] px-4 my-3"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-[16px] lg:text-[24px] text-left text-[#1A1A1A] font-medium h-[77px] lg:h-[90px]">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="text-[16px] lg:text-[24px] text-left text-[#1A1A1A]/60 mb-3">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </Wrapper>
  );
}
