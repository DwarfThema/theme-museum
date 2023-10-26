import Image from "next/image";
import Link from "next/link";
import VideoBackGround from "../src/VideoBackGround";
import Logo from "../../public/textures/dasom_logo.jpeg";

interface ContentsProps {
  onMainLoading?: () => void;
}
const JeongeunPage: React.FC<ContentsProps> = ({ onMainLoading }) => {
  return (
    <div className="bg-main-base w-screen h-screen flex justify-center lg:items-center md:items-end sm:items-end user  no-drag">
      <VideoBackGround src="/videos/jeongeun.mp4" onLoaded={onMainLoading} />
      <div className="w-full h-screen absolute md:bg-gradient-to-r sm:bg-gradient-to-t from-blackOpa via-blackSoftNext  to-transparent no-drag" />
      {/* 본문 */}
      <div className="z-10 w-10/12 lg:mb-0 md:mb-[100px]  sm:mb-[110px] text-white">
        <div>
          <div className="md:text-8xl sm:text-3xl font-semibold ">
            2 Coin Project
          </div>
          <div className="md:text-xl md:mt-2 sm:text-sm sm:mt-0 font-light mt-2">
            by Jeongeun Park
          </div>
        </div>
        <div className="lg:w-[782px] md:w-fit  height650:hidden  lg:mt-7 md:mt-3 md:block sm:hidden ">
          <div className="text-base font-extralight">
            {`인간의 기억과 향수(Nostalgia)에 대한 리서치를 기반으로 다양한 매체를 활용하여 작업한다.
'기억'은 뇌 과학, 심리학, 철학 등 다양한 분야에서 연구되고 있으며, 그 복잡성과 신비로움으로 인해 계속해서 우리를 매료시키는 주제 중 하나이다. 내가 창작을 하는 행위는 기억의 복잡성을 직접 경험하고 탐구하는 과정이다.`}
          </div>
          <div className="mt-7 font-semibold text-xl lg:block md:hidden height750:hidden">
            DIGITFORMING
          </div>
          <div className="mt-1 lg:block md:hidden height750:hidden">
            {`«MSC(Memory Service Centre)»는 인터랙티브 웹 아트로, ‘기억’을 가상
            서비스의 형태로 제공한다. 이를 통해 사용자들은 기억의 형성, 저장,
            회상, 그리고 기억 손실 등 다양한 관점에서 ‘기억’에 대해 사유할 수
            있는 기회를 만나게 된다. 빠르게 진화하는 디지털 기술과 의학의 발전의
            시대에서 우리 기억의 가치와 본질을 조명해 보길 바란다.`}
          </div>
        </div>
        <div className="lg:mt-7 md:mt-0 sm:mt-0">
          <div className="lg:block md:hidden sm:hidden">
            ⬇️ ENTRANCE BELOW ⬇️
          </div>
          <div className="lg:mt-3 md:mt-3 sm:mt-2 flex ">
            <Link href="https://www.2europroject.com/" target="_blank">
              <button>
                <Image src={Logo} alt="entrance" className="w-[185px] h-fit" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* 본문 끝 */}
    </div>
  );
};

export default JeongeunPage;
