import { Fragment } from "react";
import { Wrapper } from "@/components";
import { SERVICES_PERKS } from "@/components/data";
import { HERO_CARD } from "../../../public/assets/images";
import Image from "next/image";

export default function Services() {
  return (
    <div className="w-full overflow-hidden pb-[7rem] lg:pb-10">
      <Wrapper className="bg-[#B6EF8A] h-[700px] md:h-[980px] lg:h-[1050px] xl:h-full 3xl:overflow-hidden rounded-[20px] lg:rounded-[38px] my-[12px] lg:my-[56px] relative p-5 lg:p-[4rem]">
        <div className="grid xl:grid-cols-5 gap-4 text-center lg:text-left">
          <div className="col-span-5 lg:col-span-2">
            <h1 className="font-extrabold text-[56px] xl:text-[115px] leading-[95%]">
              Digitally Native
            </h1>
            <p className="lg:font-medium mt-5 text-[16px] xl:text-[24px]">
              A digital card that helps you achieve your goals
            </p>
            <div className="mt-5 xl:mt-20">
              {SERVICES_PERKS.map((perk) => (
                <Fragment key={perk}>
                  <div className="bg-[#C7F3A5] inline-block rounded-[17px] my-2 px-5">
                    <div className="flex items-center h-[56px] xl:h-[77px] text-[16px] lg:text-[24px] font-semibold">
                      {perk}
                    </div>
                  </div>{" "}
                  <br />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="col-span-5 lg:col-span-3 relative">
            <div className="absolute left-[-15%] lg:left-0 right-[-15%] xl:right-[-19%]">
              <Image src={HERO_CARD} className="4xl:w-[90%]" alt="hero card" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
