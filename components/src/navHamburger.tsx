"use client";

import { motion, useCycle } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import VerticalLogo from "../../public/LogoVertical.png";
import Supporter from "../../public/Supporter_sm.png";
import SupporterLg from "../../public/Supporter_lg.png";
import VivlePark from "../../public/Vivlepark.png";
import ThemeImg from "../../public/Theme.png";
import instImg from "../../public/instalogo.png";
import InstaLink from "@/components/instaLink";
import Image from "next/image";
import { isDesktop } from "react-device-detect";

export default function NavHamburger() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const [windowDimensions, setWindowDimensions] = useState<number | undefined>(
    undefined
  );

  const [circlePos, setCirclePos] = useState<number>(0);

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    setCirclePos((windowDimensions as number) - 50);
    return (): void => window.removeEventListener("resize", handleResize);
  }, [circlePos, windowDimensions]); // Empty array ensures that effect is only run on mount

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="z-40 fixed top-0 right-0 bottom-0 w-[150px] h-[150px] flex items-start justify-end"
    >
      <motion.div
        className=" w-[60px] h-[60px] xl:mt-10 xl:mr-10 zero:mt-7 zero:mr-4 rounded-full bg-white "
        variants={infoBar}
      ></motion.div>
      <button
        onClick={() => toggleOpen()}
        className="z-50 absolute xl:mr-[57px] xl:mt-[59px] zero:mr-[34px] zero:mt-[49px] outline-none border-none rounded-[50%]"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 1, type: "tween" }}
        variants={infoContents}
        className={`w-screen z-40 xl:pt-[95%] ${
          isDesktop ? `zero:pt-[0%]` : `zero:pt-[50%]`
        } flex justify-center absolute ${!isOpen ? `hidden` : `flex`}`}
      >
        <div className="xl:w-[1200px] xl:h-[610px] xl:mt-0 xl:items-center zero:w-[300px] zero:h-screen zero:items-start flex ">
          <Image
            src={VerticalLogo}
            alt="logo"
            className="xl:flex zero:hidden w-[535px] h-fit no-drag"
          />
          <div className="xl:flex zero:hidden w-[88px] h-full " />
          <div className="xl:w-[577px] zero:w-[300px] h-full items-start justify-center flex flex-col text-black">
            <AboutContents title="About">
              <div className="text-[16px] font-extralight">
                <Image
                  src={ThemeImg}
                  className="xl:w-[85px] xl:mr-[19px] zero:w-[50px] zero:mr-[5px] float-left  no-drag"
                  alt="theme"
                />
                <span className="xl:block zero:hidden whitespace-pre-line break-all">
                  뮤지엄은 다양한 아티스트의 개성 넘치는 작품을 온라인으로 쉽게
                  즐길 수 있는 플랫폼이다. 개별 아티스트의 기존, 새로운 작품을
                  몰입감 넘치는 Interactive Web Art로 전환해 작품에 가치를
                  더하는 프로젝트를 진행한다. <br />
                  &apos;Digitforming&apos;은 기존 Static작품에 Digital기술을
                  더해 생동감 더하는 활동을 말한다. 띰 뮤지엄은 평면, 입체예술,
                  공예, 시각, 산업, 공간디자인 등 다양한 기반의 아티스트와
                  협업하고, 그들의 작품스타일에 최적화된 도메인을 만들어
                  예술활동을 서포트 한다. 웹 전시뿐만 아니라, 매해 시즌에 맞춰
                  오프라인 전시 및 팝업스토어를 개최하며, 펀딩활동을 통해 작품의
                  특성에 맞는 제품을 제작 및 유통해 작가를 서포트한다.
                </span>
                <span className="xl:hidden zero:block whitespace-pre-line break-all">
                  뮤지엄은 다양한 아티스트의 개성 넘치는 작품을 온라인으로 쉽게
                  즐길 수 있는 플랫폼이다. 개별 아티스트의 기존, 새로운 작품을
                  몰입감 넘치는 Interactive Web Art로 전환해 작품에 가치를
                  더하는 프로젝트를 진행한다. 웹 전시뿐만 아니라, 매해 시즌에
                  맞춰 오프라인 전시 및 팝업스토어를 개최하며, 펀딩활동을 통해
                  작품의 특성에 맞는 제품을 제작 및 유통해 작가를 서포트한다.
                </span>
              </div>
              <div className="whitespace-pre-line break-all lx:mt-[32px] zero:mt-[10px] ">
                &apos;The Theme Museum&apos; is a platform where you can easily
                enjoy the unique works of various artists online. It will
                convert existing and new works of individual artists into
                immersive Interactive Web Art to carry out a project to add
                value to the work. In addition to web exhibitions, offline
                exhibitions and pop-up stores are held every year in time for
                the season, and through funding activities, products tailored to
                the characteristics of the work are produced and distributed to
                support artists.
              </div>
              <div className="flex items-center mt-[10px]">
                <InstaLink userName="theme_museum" />
                <Link href="https://open.kakao.com/o/s4YEMUOf" target="_blank">
                  <button className="py-[1px] px-2 mx-2 border-black border-[1px] ">
                    Contact
                  </button>
                </Link>
              </div>
            </AboutContents>
            <div className="xl:mt-[60px] xl:block zero:mt-[10px] zero:hidden">
              <AboutContents title="Production">
                <Image
                  src={VivlePark}
                  alt="production"
                  className="xl:w-[61px] zero:w-[40px]  no-drag"
                />
              </AboutContents>
            </div>
            <div className="xl:mt-[43px] xl:block zero:mt-[20px] zero:hidden">
              <AboutContents title="Sponsor">
                <Link href="https://artson.arko.or.kr/artson/" target="_blank">
                  <Image
                    src={Supporter}
                    alt="support"
                    className="xl:w-[350px] zero:w-[340px] no-drag"
                  />
                </Link>
              </AboutContents>
            </div>
            <div className="xl:mt-[70px] xl:hidden zero:mt-[20px] zero:flex ">
              <AboutContents title="Sponsor & Production">
                <Link href="https://artson.arko.or.kr/artson/" target="_blank">
                  <Image
                    src={SupporterLg}
                    alt="support"
                    className="xl:w-[350px] zero:w-[340px] no-drag"
                  />
                </Link>
              </AboutContents>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const infoContents = {
  open: {
    opacity: "100%",
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.5,
    },
  },
  closed: {
    opacity: "0%",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const infoBar = {
  open: (height = 10) => ({
    scale: 100,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = ({ ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

function AboutContents({
  title,
  children,
  ...props
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col justify-center text-[13px]`} {...props}>
      <div>{title}</div>
      <div className="border-b-[0.9px] border-black w-[166px] mb-1" />
      {children}
    </div>
  );
}
