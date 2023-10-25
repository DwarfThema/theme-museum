import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import mainLogo from "../../public/textures/logo_bk.png";
import VerticalLogo from "../../public/LogoVertical.png";
import Supporter from "../../public/suppoter_supporter.png";
import VivlePark from "../../public/suppoter_vivlepark.png";
import ThemeImg from "../../public/Theme.png";

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
    <div className="fixed w-screen h-screen z-30 flex">
      <div>
        <Image src={mainLogo} alt="NavLogo" className="w-[200px] pt-10 pl-11" />
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="z-50 fixed top-0 right-0 bottom-0 w-[150px] h-[150px] flex items-start justify-end"
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
            <Image src={VerticalLogo} alt="logo" className="w-[535px] h-fit" />
            <div className="w-[88px] h-full " />
            <div className="w-[577px] flex flex-col items-start py-[42 px]">
              <AboutContents title="about">
                <div className="text-[16px] font-extralight ">
                  <Image
                    src={ThemeImg}
                    className="w-[85px] float-left mr-[19px]"
                    alt="theme"
                  />
                  <span className="whitespace-pre-line break-all">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea comLorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci
                  </span>
                </div>
                <div className="whitespace-pre-line break-all mt-[32px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat.
                </div>
              </AboutContents>
              <div className="mt-[70px]">
                <AboutContents title="Production">
                  <Link
                    href="https://www.vivlepark.com"
                    className="lg:w-[61px] zero:w-[61px] "
                    target="_blank"
                  >
                    <Image src={VivlePark} alt="support" />
                  </Link>
                </AboutContents>
              </div>
              <div className="mt-[43px]">
                <AboutContents title="Sponsor">
                  <Link
                    href="https://artson.arko.or.kr/artson/"
                    className="lg:w-[350px] zero:w-[100px] "
                    target="_blank"
                  >
                    <Image src={Supporter} alt="support" />
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
