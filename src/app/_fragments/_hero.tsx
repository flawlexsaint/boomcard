"use client";
import { Button, Wrapper } from "@/components";
import {
  CARD,
  CARD_MOBILE,
  PARTNERS_BG,
  PARTNERS_BG_MOBLE,
} from "../../../public/assets/icon";
import { TypeAnimation } from "react-type-animation";
import { HERO_IMAGES } from "@/components/data";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => setIsVisible(true), 1 * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  return (
    <Wrapper className="py-[12px] lg:py-[45px]">
      <div className="grid xl:grid-cols-5 gap-5">
        <div className="col-span-3 xl:col-span-2">
          <div className="bg-[#000120] xl:min-h-[780px] p-8 xl:p-[3rem] rounded-[20px] lg:rounded-[38px]">
            <h1 className="font-extrabold text-[56px] text-white lg:text-[112px] leading-[95%]">
              Pay <br /> Globally <br /> With <br />
              <TypeAnimation
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                className="text-[#7D83FF]"
                sequence={["No Lies", 2000, "No Fuzz", 2000, "No Fees", 2000]}
              />
            </h1>
            <p className="lg:font-medium my-12 text-white text-[16px] lg:text-[20px]">
              Shop, Stream, and Subscribe Globally Shop online with the
              Boom Card around the world
            </p>
            <Button
              variant="secondary"
              className="w-full xl:w-[200px] h-[52px] mb-10"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="col-span-3">
          <div className="relative w-full hidden md:block md:min-h-[780px] h-full">
            <Image
              fill
              priority
              src={PARTNERS_BG}
              alt="hero partners background image"
              className="w-full h-full object-cover rounded-[39px]"
            />
            <div className="absolute inset-0 flex flex-col items-center gap-2 pt-5">
              {isVisible && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 7.8,
                      duration: 4,
                      type: "spring",
                      ease: "easeInOut",
                    }}
                    onAnimationComplete={() => setIsVisible(false)}
                  >
                    <div className="flex items-center justify-center gap-4">
                      {HERO_IMAGES.row_1.map((img, i) => (
                        <Image
                          alt=""
                          key={i}
                          src={img?.icon}
                          className={img?.style}
                        />
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 6,
                      duration: 4,
                      type: "spring",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center justify-center gap-4">
                      {HERO_IMAGES.row_2.map((img, i) => (
                        <Image
                          alt=""
                          key={i}
                          src={img?.icon}
                          className={img?.style}
                        />
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: [-40, 0], opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 3.6,
                      duration: 4,
                      type: "spring",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center justify-center gap-4">
                      {HERO_IMAGES.row_3.map((img, i) => (
                        <Image
                          alt=""
                          key={i}
                          src={img?.icon}
                          className={img?.style}
                        />
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: [180, -100, 0], opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 1,
                      duration: 4.5,
                      type: "spring",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center justify-center gap-4 z-10">
                      {HERO_IMAGES.row_4.map((img, i) => (
                        <Image
                          alt=""
                          key={i}
                          src={img?.icon}
                          className={img?.style}
                        />
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
              <div className="flex justify-center absolute bottom-0">
                <Image src={CARD} alt="" />
              </div>
            </div>
          </div>
          {/* MOBILE */}
          <div className="relative w-full min-h-[404px] block md:hidden h-full">
            <Image
              fill
              priority
              src={PARTNERS_BG_MOBLE}
              alt="hero partners background image"
              className="w-full h-full object-cover rounded-[39px]"
            />
            <div className="absolute inset-0 flex flex-col items-center gap-2 pt-5">
              {isVisible && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 7.8,
                      duration: 4,
                      type: "spring",
                      ease: "easeInOut",
                    }}
                    onAnimationComplete={() => setIsVisible(false)}
                  >
                    <div className="flex items-center justify-center gap-4">
                      {HERO_IMAGES.row_1.map((img, i) => (
                        <Image
                          alt=""
                          key={i}
                          src={img?.icon}
                          className={img?.style}
                        />
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 6,
                      duration: 4,
                      type: "spring",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center justify-center gap-4">
                      {HERO_IMAGES.row_2.map((img, i) => (
                        <Image
                          alt=""
                          key={i}
                          src={img?.icon}
                          className={img?.style}
                        />
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: [-40, 0], opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 3.6,
                      duration: 4,
                      type: "spring",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center justify-center gap-4">
                      {HERO_IMAGES.row_3.map((img, i) => (
                        <Image
                          alt=""
                          key={i}
                          src={img?.icon}
                          className={img?.style}
                        />
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: [180, -100, 0], opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: 1,
                      duration: 4.5,
                      type: "spring",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center justify-center gap-4 z-10">
                      {HERO_IMAGES.row_4.map((img, i) => (
                        <Image
                          alt=""
                          key={i}
                          src={img?.icon}
                          className={img?.style}
                        />
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
              <div className="flex justify-center absolute bottom-0">
                <Image src={CARD_MOBILE} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
