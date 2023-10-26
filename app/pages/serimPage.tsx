import Image from "next/image";
import Link from "next/link";
import VideoBackGround from "../src/VideoBackGround";
import Logo from "../../public/textures/serim_logo.jpeg";

interface ContentsProps {
  onMainLoading?: () => void;
}
const SerimPage: React.FC<ContentsProps> = ({ onMainLoading }) => {
  return (
    <div className="bg-main-base w-screen h-screen flex justify-center xl:items-center lg:items-end zero:items-end user  no-drag">
      <VideoBackGround src="/videos/serim.mp4" onLoaded={onMainLoading} />
      <div className="w-full h-screen absolute lg:bg-gradient-to-r zero:bg-gradient-to-t from-blackOpa via-blackSoftNext  to-transparent no-drag" />
      {/* 본문 */}
      <div className="z-10 w-10/12 xl:mb-0 lg:mb-[100px] zero:mb-[80px] text-white">
        <div>
          <div className="lg:text-8xl zero:text-3xl font-semibold ">
            Home:Forest And For-Rest
          </div>
          <div className="lg:text-xl lg:mt-2 zero:text-sm zero:mt-0 font-light mt-2">
            by Serim Yang
          </div>
        </div>
        <div className="xl:w-[782px] lg:w-fit  height650:hidden  xl:mt-7 lg:mt-3 lg:block zero:hidden ">
          <div className="text-base font-extralight">
            {`집과 자연은 일상 속에서 지친 나에게 늘 흥미로운 존재이며, 위안과 안정을 준다. 작업 속 집과 자연물들은 일상 안에서의 조화로운 관계를 나타내는 것뿐만 아니라, 더 깊은 의미와 내면의 치유를 담아내며 나를 동심의 세계로 인도한다. 이러한 경험을 통해 내 작업은 나만의 자유로운 색채와 다양한 질감의 종이를 활용하여 일상 속 힐링을 순수하고 사랑스러운 분위기로 재해석한다.`}
          </div>
          <div className="mt-7 font-semibold text-xl xl:block lg:hidden height750:hidden">
            DIGITFORMING
          </div>
          <div className="mt-1 xl:block lg:hidden height750:hidden">
            {`온라인 예술 활동 사업을 진행하며 콜라주 기반의 작업들을 3D 가상 공간에 결합하여 기존의 평면 작품에 담아내기 어려운 고유한 에너지를 시간의 흐름과 움직임 그리고 인터랙션을 통해 생동감을 더했다.\n<Home: Forest and For-rest>는 자연과의 소중한 만남과 동화된 순간들을 안식처인 집 속에 담아내어, 그 속에 내재하는 아름다움과 감동을 입체적으로 공유하고자 한다.`}
          </div>
        </div>
        <div className="xl:mt-7 lg:mt-0 zero:mt-0">
          <div className="xl:block lg:hidden zero:hidden">
            ⬇️ ENTRANCE BELOW ⬇️
          </div>
          <div className="xl:mt-3 lg:mt-3 zero:mt-2 flex ">
            <Link href="https://www.homeforestandfor-rest.com/" target="_blank">
              <button>
                <Image
                  src={Logo}
                  alt="entrance"
                  className="xl:w-[185px] zero:w-[130px]"
                  quality={30}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* 본문 끝 */}
    </div>
  );
};

export default SerimPage;
