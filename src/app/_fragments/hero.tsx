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
      <div className="block xl:flex xl:gap-5">
        <div className="bg-[#000120] xl:min-h-[798px] py-[32px] px-[20px] xl:py-[78px] xl:px-[48px] w-full xl:w-[582px] rounded-[20px] lg:rounded-[38px]">
          <h1 className="font-extrabold text-[64px] leading-[67.84px] text-white lg:text-[111.76px] lg:leading-[111.76px]">
            Pay <br /> Globally <br /> With <br />
            <TypeAnimation
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              className="text-[#7D83FF]"
              sequence={["No Lies", 1500, "No Fuzz", 1500, "No Fees", 1500]}
            />
          </h1>
          <p className="py-[20px] lg:py-[48px] text-white text-[16px] lg:text-[20px]">
            Shop, Stream, and Subscribe Globally Shop online with the Boom Card
            around the world
          </p>
          <Button
            variant="secondary"
            className="w-full xl:w-[200px] h-[52px] text-[16px] font-medium"
          >
            Get Started
          </Button>
        </div>
        <div>
          <div className="relative w-[806px] hidden lg:block lg:mt-10 xl:mt-0 md:min-h-[798px] h-full">
            <Image
              fill
              priority
              src={PARTNERS_BG}
              alt="hero partners background image"
              className="w-full object-cover rounded-[39px]"
            />
            <div className="absolute inset-0 flex flex-col items-center gap-2 mt-[51.82px]">
              {isVisible && (
                <>
                  <motion.div
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 3,
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
                      delay: 2,
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
                      delay: 1,
                      duration: 3.2,
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
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ y: [-50, 0], opacity: 1 }}
                    transition={{
                      duration: 2.5,
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
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ y: [100, 0], opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 1.0,
                    type: "spring",
                    ease: "easeInOut",
                  }}
                >
                  <Image src={CARD} className="h-[460px]" alt="" />
                </motion.div>
              </div>
            </div>
          </div>
          {/* MOBILE SCREENS */}
          <div className="relative w-full min-h-[404px] md:min-h-[700px] mt-6 block lg:hidden h-full">
            <Image
              fill
              priority
              src={PARTNERS_BG_MOBLE}
              alt="hero partners background image"
              className="w-full h-full object-cover rounded-[20px]"
            />
            <div className="absolute inset-0 flex flex-col items-center gap-2 pt-5">
              {isVisible && (
                <>
                  <motion.div
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 3,
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
                      delay: 2,
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
                      delay: 1,
                      duration: 3.2,
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
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ y: [-50, 0], opacity: 1 }}
                    transition={{
                      duration: 2.5,
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
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ y: [100, 0], opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 1.0,
                    type: "spring",
                    ease: "easeInOut",
                  }}
                >
                  <Image src={CARD_MOBILE} className="md:w-[550px]" alt="" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
