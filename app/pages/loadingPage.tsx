import Image from "next/image";
import loadingImg from "../../public/Loading_Logo.png";
import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function LoadingPage() {
  const { progress, loaded } = useProgress();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loaded >= 7) {
      setLoading(true);
    }
  }, [progress, loaded]);

  return (
    <div
      className={`bg-main-base w-screen h-screen flex justify-center items-center flex-col fixed no-drag
          ${loading ? "opacity-0 z-0 hidden" : "opacity-100 z-50"}`}
    >
      <Image
        src={loadingImg}
        alt="LoadingImg"
        className="mb-[20px] no-drag"
        quality={80}
      />
      <svg
        width="50px"
        height="50px"
        display="inline-block"
        version="1.1"
        id="L2"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
      >
        <circle
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeMiterlimit="10"
          cx="50"
          cy="50"
          r="48"
        />
        <line
          fill="none"
          strokeLinecap="round"
          stroke="#fff"
          strokeWidth="5"
          strokeMiterlimit="10"
          x1="50"
          y1="50"
          x2="85"
          y2="50.5"
        >
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </line>
        <line
          fill="none"
          strokeLinecap="round"
          stroke="#fff"
          strokeWidth="5"
          strokeMiterlimit="10"
          x1="50"
          y1="50"
          x2="49.5"
          y2="74"
        >
          <animateTransform
            attributeName="transform"
            dur="15s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  );
}
