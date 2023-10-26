import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import mainLogo from "../../public/textures/logo_bk.png";
import VerticalLogo from "../../public/LogoVertical.png";
import Supporter from "../../public/suppoter_supporter.png";
import VivlePark from "../../public/suppoter_vivlepark.png";
import ThemeImg from "../../public/Theme.png";
import { useProgress } from "@react-three/drei";

export default function NavBar() {
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
    <div className={`fixed w-screen h-screen z-40 no-drag flex`}>
      <div>
        <Image
          src={mainLogo}
          alt="NavLogo"
          className="w-[150px] pt-10 pl-11 z-40 fixed top-0 left-0 no-drag"
          quality={30}
        />
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="z-40 fixed top-0 right-0 bottom-0 w-[150px] h-[150px] flex items-start justify-end"
      >
        <motion.div
          className=" w-[60px] h-[60px] m-10 rounded-full bg-white "
          variants={infoBar}
        ></motion.div>
        <button
          onClick={() => toggleOpen()}
          className="z-50 absolute mr-[57px] mt-[59px] outline-none border-none rounded-[50%]"
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
          className={`w-screen h-screen z-40  flex justify-center items-center absolute ${
            !isOpen ? `hidden` : `flex`
          }`}
        >
          <div className="w-[1200px] h-[610px] flex items-center">
            <Image
              src={VerticalLogo}
              alt="logo"
              className="w-[535px] h-fit no-drag"
            />
            <div className="w-[88px] h-full " />
            <div className="w-[577px] flex flex-col items-start py-[42 px]">
              <AboutContents title="about">
                <div className="text-[16px] font-extralight ">
                  <Image
                    src={ThemeImg}
                    className="w-[85px] float-left mr-[19px] no-drag"
                    alt="theme"
                  />
                  <span className="whitespace-pre-line break-all">
                    뮤지엄은 다양한 아티스트의 개성넘치는 작품을 온라인으로 쉽게
                    즐길 수 있는 플랫폼이다. 개별 아티스트의 기존, 새로운 작품을
                    몰입감 넘치는 Interactive Web Art로 전환해 기존 작품에
                    가치를 더하는 프로젝트를 진행한다. Digitforming은 기존
                    Static작품에 Digital기술을 더해 생동감(vivre)더하는
                    활동을한다. 띰뮤지엄은 평면, 입체예술, 공예, 시각, 산업,
                    공간디자인 등 다양한 기반의 아티스트와 협업하며, 그들의
                    작품스타일에 최적화된 도메인을 만들어 예술활동을 서포트
                    한다. 단순웹기반 전시 뿐만 아니라, 매해 시즌에 맞춰 오프라인
                    전시 및 팝업스토를 개최할 계획이다. 또한 작품의 특성에 맞는
                    제품을 제작 및 유통하는 펀딩활동을 통해 작가를 서포트한다.
                  </span>
                </div>
                <div className="whitespace-pre-line break-all mt-[32px]">
                  Theme Museum is a platform where you can easily enjoy the
                  unique works of various artists online. It will convert
                  existing and new works of individual artists into immersive
                  Interactive Web Art to carry out a project to add value to
                  existing works. We call this Digitforming, and we add digital
                  technology to existing static works to add vitality (vivre).
                  In addition to simple web-based exhibitions, it plans to hold
                  offline exhibitions and pop-up stores every year in time for
                  the season.
                </div>
              </AboutContents>
              <div className="mt-[70px]">
                <AboutContents title="Production">
                  <Image
                    src={VivlePark}
                    alt="production"
                    className="lg:w-[61px] zero:w-[61px]  no-drag"
                  />
                </AboutContents>
              </div>
              <div className="mt-[43px]">
                <AboutContents title="Sponsor">
                  <Link
                    href="https://artson.arko.or.kr/artson/"
                    className="lg:w-[350px] zero:w-[100px] "
                    target="_blank"
                  >
                    <Image src={Supporter} alt="support" className="no-drag" />
                  </Link>
                </AboutContents>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
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
