import Image from "next/image";
import Link from "next/link";
import VideoBackGround from "../src/VideoBackGround";
import Logo from "../../public/textures/donggi_logo.jpg";

interface ContentsProps {
  onMainLoading?: () => void;
}
const DonggiPage: React.FC<ContentsProps> = ({ onMainLoading }) => {
  return (
    <div className="bg-main-base w-screen h-screen flex justify-center xl:items-center lg:items-end zero:items-end user  no-drag">
      <VideoBackGround src="/videos/donggi.mp4" onLoaded={onMainLoading} />
      <div className="w-full h-screen absolute lg:bg-gradient-to-r zero:bg-gradient-to-t from-blackOpa via-blackSoftNext  to-transparent no-drag" />
      {/* 본문 */}
      <div className="z-10 w-10/12 xl:mb-0 lg:mb-[100px] zero:mb-[80px] text-white">
        <div>
          <div className="lg:text-8xl zero:text-3xl font-semibold ">
            Dal Ma Gi
          </div>
          <div className="lg:text-xl lg:mt-2 zero:text-sm zero:mt-0 font-light mt-2">
            by Donggi Eun
          </div>
        </div>
        <div className="xl:w-[782px] lg:w-fit  height650:hidden  xl:mt-7 lg:mt-3 lg:block zero:hidden ">
          <div className="text-base font-extralight">
            {`동쪽 지평에서 둥근 달이 솟아오르기 시작하면 사람들은 저마다 소원을 빈다. 과거부터 달은 풍요를 상징한다. 그 달을 바라보면 토끼가 방아찧는 모습이 보인다. 계묘년을 맞아 몽환적 공간에서 달과 함께 뛰어노는 토끼의 형상을 표현하고자 했다.
 나는 매일 달을 맞이한다. 무수히 떠다니는 작업들과 하나의 달 그리고 토끼들이 보이는 이 공간은 작업의 형상을 계속 쫒는 나의 매일이며 사고의 순간이다.`}
          </div>
          <div className="mt-7 font-semibold text-xl xl:block lg:hidden height750:hidden">
            DIGITFORMING
          </div>
          <div className="mt-1 xl:block lg:hidden height750:hidden">
            {`나는 다양한 설치를 통해 관람자에게 작품을 보여준다. 기존 전시의 공통된 단점은 한정 공간에서 작품을 설치해야한다는 것, 그리고 나의 작업물이 안전하게 놓여있어야 한다는 것이다. 이번 가상공간 전시는 나에게 세상에 존재하지 않는 공간에서, 나의 작업을 기존에 설치할 수 없는 방식으로 구성하는 것을 가능하게하였다.`}
          </div>
        </div>
        <div className="xl:mt-7 lg:mt-0 zero:mt-0">
          <div className="xl:block lg:hidden zero:hidden">
            ⬇️ ENTRANCE BELOW ⬇️
          </div>
          <div className="xl:mt-3 lg:mt-3 zero:mt-2 flex ">
            <Link href="https://www.dalmagi.co.kr/" target="_blank">
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

export default DonggiPage;
