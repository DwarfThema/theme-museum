import Image from "next/image";
import Link from "next/link";
import VideoBackGround from "../src/VideoBackGround";
import Logo from "../../public/textures/jeongeun_logo.jpg";
import InstaLink from "@/components/instaLink";

interface ContentsProps {
  onMainLoading?: () => void;
}
const JeongeunPage: React.FC<ContentsProps> = ({ onMainLoading }) => {
  return (
    <div className="bg-blackbase w-screen h-screen flex justify-center xl:items-center lg:items-end zero:items-end user  no-drag">
      <VideoBackGround src="/videos/jeongeun.mp4" onLoaded={onMainLoading} />
      <div className="w-full h-screen absolute lg:bg-gradient-to-r zero:bg-gradient-to-t from-blackOpa via-blackSoftNext  to-transparent no-drag" />
      {/* 본문 */}
      <div className="z-10 xl:w-10/12 zero:w-11/12 xl:mb-0 lg:mb-[100px] zero:mb-[80px] text-white">
        <div>
          <div className="lg:text-8xl zero:text-3xl font-semibold ">
            2 Euro Projekt
          </div>
          <div className="lg:text-xl lg:mt-2 zero:text-sm zero:mt-0 font-light mt-2 flex items-center">
            <div>by Jeongeun Park</div>
            <InstaLink
              userName="jeongk___k"
              className="m-1 ml-2"
              width={15}
              bg
            />
          </div>
        </div>
        <div className="xl:w-[782px] lg:w-fit  height650:hidden  xl:mt-7 lg:mt-3 lg:block zero:hidden ">
          <div className="text-base font-extralight">
            {`<2 EURO PROJEKT> 는 여행을 다니며 남은 동전에서 시작되었다. 여행중에 성당안에 들어가서 동전 하나를 넣고 소원을 빌던 기억이 있다. 그 순간을 포착하여 집으로 가져오고싶은 마음에 성당안의 천사들을 접어서 숨겨 집으로 데려왔다. 집에서 동전을 구멍에 놓고 소원을 비니 그 순간 불이 켜지며 천사들이 문을 닫아버렸다.`}
          </div>
          <div className="mt-7 font-semibold text-xl xl:block lg:hidden height750:hidden">
            DIGITFORMING
          </div>
          <div className="mt-1 xl:block lg:hidden height750:hidden">
            {`웹 아트로 실제 움직임을 구현하면서 작업의 개연성과 과정에 생동감을 더한다. 사용자들은 열려있던 구조물이 동전으로 완성되고 열쇠로 닫히는 엔딩을 관람하며 실물 작업을 체험해볼 수 있다.`}
          </div>
        </div>
        <div className="xl:mt-7 lg:mt-0 zero:mt-0">
          <div className="xl:block lg:hidden zero:hidden">
            ⬇️ ENTRANCE BELOW ⬇️
          </div>
          <div className="xl:hidden zero:flex">Link ⬇️</div>
          <div className="xl:mt-3 lg:mt-3 zero:mt-2 flex ">
            <Link href="https://www.2europroject.com/" target="_blank">
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

export default JeongeunPage;
