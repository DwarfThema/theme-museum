import Image from "next/image";
import Link from "next/link";
import instImg from "../public/instalogo.png";

export default function InstaLink({
  userName,
  width = 25,
  bg = false,
  className = ``,
  ...props
}: {
  userName: string;
  width?: number;
  bg?: boolean;
  className?: string;
}) {
  return (
    <Link href={`https://www.instagram.com/${userName}`} target="_blank">
      {bg ? (
        <div className={`p-[3px] bg-white rounded-md ${className}`} {...props}>
          <Image src={instImg} alt="insta" quality={50} width={width} />
        </div>
      ) : (
        <Image src={instImg} alt="insta" quality={50} width={width} />
      )}
    </Link>
  );
}
