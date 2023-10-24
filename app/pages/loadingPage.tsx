import Image from "next/image";
import loadingImg from "../../public/thumbnail.jpg";
import { Html } from "@react-three/drei";

export default function LoadingPage() {
  return (
    <Html className="w-screen h-screen flex justify-center items-center bg-black">
      <Image src={loadingImg} alt="LoadingImg" />
    </Html>
  );
}
