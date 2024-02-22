import Image from "next/image";
import mainLogo from "../../public/textures/logo_bk.png";
import NavHamburger from "./navHamburger";

export default async function NavBar() {
  return (
    <div className={`fixed w-screen z-40 no-drag flex`}>
      <div>
        <Image
          src={mainLogo}
          alt="NavLogo"
          className="xl:w-[150px] xl:pt-10 xl:pl-11 zero:w-[120px] zero:pt-8 zero:pl-5 z-40 fixed top-0 left-0 no-drag"
          quality={30}
        />
      </div>
      <NavHamburger />
    </div>
  );
}
