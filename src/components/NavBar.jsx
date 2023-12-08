import { navLinks } from "../constants";
import {
  RiTwitterLine,
  RiDiscordLine,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";
import { useState } from "react";

const NavBar = () => {
  

  const [sticky, setSticky] = useState(false);
  const [phone, setPhone] = useState(false);

  const opener = () => {
    setPhone(!phone);
  };

  const Scroll_handle = () => {
    if (window.screenY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", Scroll_handle);

  const GoTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  const Mobile_nav = (
    <>
      <div className="lg:hidden block absolute top-24 min-h-screen w-full left-0 right-0 bg-white transition" data-aos="fade-in">
        <ul className="flex flex-col gap-10 text-center text-xl p-20">
          {navLinks.map((item) => (
            <li key={item.label} className="hover:text-black">
              <a href={item.href} onClick={opener}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <header
      className={`padding-x py-8 fixed z-10 w-full h-24 bg-white ${
        window.screenY > 150 ? " drop-shadow-md" : ""
      }`}
    >
      <nav
        className={`${
          sticky ? ".nav-play" : ""
        } flex justify-between items-center max-container `}
      >
        <div>
          <h1
            onClick={GoTop}
            className="flex justify-start items-center font-Recursive font-bold text-[2rem] m-0 cursor-pointer"
          >
            COINAGE
          </h1>
        </div>
        <ul className="flex-1 flex justify-center items-center font-Outfit text-xl font-semibold gap-16 max-lg:hidden text-gray-600 ">
          {navLinks.map((item) => (
            <li key={item.label} className="hover:text-black">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 max-lg:hidden wide:mr-24">
          <RiTwitterLine className="h-[25px] w-[25px]" />
          <RiDiscordLine className="h-[25px] w-[25px]" />
        </div>
        <div>{phone && Mobile_nav}</div>
        <button className="hidden max-lg:block h-[25] w-[25]" onClick={opener}>
          {phone ? <RiCloseLine size={25} /> : <RiMenuLine size={25} />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
