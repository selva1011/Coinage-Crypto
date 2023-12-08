import {
  RiTwitterLine,
  RiFacebookLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { footer_img, footer_img1 } from "../assets/images";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex absolute flex-col justify-center items-center text-center h-[20rem] w-full bg-white-200"
    >
      <div className="absolute bottom-16 justify-center items-center">
        <div className="flex m-4 mb-8 gap-10">
          <RiWhatsappLine className="cursor-pointer " size={30} />
          <RiInstagramLine className="cursor-pointer" size={30} />
          <RiTwitterLine className="cursor-pointer" size={30} />
          <RiFacebookLine className="cursor-pointer" size={30} />
          <RiYoutubeLine className="cursor-pointer" size={30} />
        </div>
        <div className="flex m-5 justify-center text-center font-Recursive text-lg font-semibold gap-12">
          <p className="cursor-pointer hover:opacity-100 opacity-60	">Privacy</p>
          <p className="cursor-pointer hover:opacity-100 opacity-60	">
            Terms of Use
          </p>
        </div>
      </div>
      <div className="flex max-lg:hidden">
        <div className="flex absolute  bottom-1 left-7">
          <img src={footer_img1} alt="footer" height={400} width={400} />
        </div>
        <div className="flex absolute bottom-1 right-7" >
          <img src={footer_img} alt="footer" height={400} width={400} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
