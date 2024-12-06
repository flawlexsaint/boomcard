"use client";
import { Wrapper } from "@/components";
import { Fragment, useEffect } from "react";
import { SERVICES_PERKS } from "@/components/data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HERO_CARD } from "../../../public/assets/images";
import Image from "next/image";

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: [-100, 0], opacity: 1, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: [100, 0],
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        ease: "easeInOut",
        position: ["relative", "absolute"],
      },
    },
  };

  return (
    <Wrapper className="h-[860px] md:h-[958px] lg:h-[1300px] xl:h-[1000px]">
      <div className="bg-[#B6EF8A] w-full py-[73px] px-4 xl:px-[76px] h-[738px] md:h-[798px] lg:h-[1100px] xl:h-[798px] rounded-[20px] xl:rounded-[38px] my-[12px] xl:my-[56px] relative mx-0">
        <div className="block xl:flex" ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="block xl:flex"
          >
            <div className="w-full xl:w-[473px] text-center xl:text-left">
              <h1 className="font-extrabold text-[56px] leading-[53px] lg:text-[115px] lg:leading-[95%]">
                Digitally Native
              </h1>
              <p className="lg:font-medium mt-5 text-[16px] lg:text-[24px]">
                A digital card that helps you achieve your goals
              </p>
              <div className="mt-5 xl:mt-20">
                {SERVICES_PERKS.map((perk) => (
                  <Fragment key={perk}>
                    <div className="bg-[#C7F3A5] inline-block rounded-[17px] my-2 px-5">
                      <div className="flex items-center h-[56px] xl:h-[77px] text-[16px] xl:text-[24px] font-semibold">
                        {perk}
                      </div>
                    </div>{" "}
                    <br />
                  </Fragment>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className="xl:w-[1100px] xl:h-[956px] absolute right-[-20px] lg:right-[-130px] xl:right-[-147px] mt-5 xl:mt-0"
          >
            <Image alt="hero card" src={HERO_CARD} />
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}
