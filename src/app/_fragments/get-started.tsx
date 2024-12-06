import { Button, Wrapper } from "@/components";
import { FOOTER_BG, FOOTER_BG_MOBILE } from "../../../public/assets/images";
import Image from "next/image";
import React from "react";

export default function GetStarted() {
  return (
    <Wrapper className="py-[12px] lg:py-[56px]">
      {/* DESKTOP SECTION */}
      <div className="hidden md:block relative w-full h-[230px]">
        <Image
          fill
          priority
          src={FOOTER_BG}
          alt="footer background"
          className="w-full h-[230px] object-cover rounded-[25px]"
        />
        <div className="absolute inset-0 flex flex-col items-center gap-2 justify-center">
          <h1 className="text-white text-[32px] font-medium">
            Ready to Start Globally Payments?
          </h1>
          <h3 className="text-white text-[20px]">
            Get Your Card for Just $3 Fund and start spending immediately
          </h3>
          <Button
            variant="secondary"
            className="w-[200px] h-[52px] text-[16px] font-medium mt-4"
          >
            Get Started
          </Button>
        </div>
      </div>
      {/* MOBILE SECTION */}
      <div className="block md:hidden relative w-full h-[620px]">
        <Image
          fill
          priority
          src={FOOTER_BG_MOBILE}
          alt="footer background"
          className="w-full h-[620px] object-cover rounded-[25px]"
        />
        <div className="absolute inset-0 flex flex-col items-center mx-auto text-center gap-2 max-w-[300px]">
          <h1 className="text-white text-[28px] font-medium mt-10">
            Ready to Start Globally Payments?
          </h1>
          <h3 className="text-white text-[18px] mt-3">
            Get Your Card for Just $3 Fund and start spending <br /> immediately
          </h3>
          <Button
            variant="secondary"
            className="w-[200px] h-[52px] text-[16px] font-medium mt-10"
          >
            Get Started
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
