import Image from "next/image";
import Link from "next/link";
import VideoBackGround from "../src/VideoBackGround";
import Logo from "../../public/textures/donggi_logo.jpg";

interface ContentsProps {
  onMainLoading?: () => void;
}
const DonggiPage: React.FC<ContentsProps> = ({ onMainLoading }) => {
  return (
    <div className="bg-main-base w-screen h-screen flex justify-center lg:items-center md:items-end sm:items-end user  no-drag">
      <VideoBackGround src="/videos/donggi.mp4" onLoaded={onMainLoading} />
      <div className="w-full h-screen absolute md:bg-gradient-to-r sm:bg-gradient-to-t from-blackOpa via-blackSoftNext  to-transparent no-drag" />
      {/* 본문 */}
      <div className="z-10 w-10/12 lg:mb-0 md:mb-[100px]  sm:mb-[110px] text-white">
        <div>
          <div className="md:text-8xl sm:text-3xl font-semibold ">
            Dal Ma Gi
          </div>
          <div className="md:text-xl md:mt-2 sm:text-sm sm:mt-0 font-light mt-2">
            by Donggi Eun
          </div>
        </div>
        <div className="lg:w-[782px] md:w-fit  height650:hidden  lg:mt-7 md:mt-3 md:block sm:hidden ">
          <div className="text-base font-extralight">
            {`동쪽 지평에서 둥근 달이 솟아오르기 시작하면 사람들은 저마다 소원을 빈다. 과거부터 달은 풍요를 상징한다. 그 달을 바라보면 토끼가 방아찧는 모습이 보인다. 계묘년을 맞아 몽환적 공간에서 달과 함께 뛰어노는 토끼의 형상을 표현하고자 했다.
 나는 매일 달을 맞이한다. 무수히 떠다니는 작업들과 하나의 달 그리고 토끼들이 보이는 이 공간은 작업의 형상을 계속 쫒는 나의 매일이며 사고의 순간이다.`}
          </div>
          <div className="mt-7 font-semibold text-xl lg:block md:hidden height750:hidden">
            DIGITFORMING
          </div>
          <div className="mt-1 lg:block md:hidden height750:hidden">
            {`나는 다양한 설치를 통해 관람자에게 작품을 보여준다. 기존 전시의 공통된 단점은 한정 공간에서 작품을 설치해야한다는 것, 그리고 나의 작업물이 안전하게 놓여있어야 한다는 것이다. 이번 가상공간 전시는 나에게 세상에 존재하지 않는 공간에서, 나의 작업을 기존에 설치할 수 없는 방식으로 구성하는 것을 가능하게하였다.`}
          </div>
        </div>
        <div className="lg:mt-7 md:mt-0 sm:mt-0">
          <div className="lg:block md:hidden sm:hidden">
            ⬇️ ENTRANCE BELOW ⬇️
          </div>
          <div className="lg:mt-3 md:mt-3 sm:mt-2 flex ">
            <Link href="https://www.dalmagi.co.kr/" target="_blank">
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

export default DonggiPage;
