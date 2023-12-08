import Button from "../components/Button";
import Input from "../components/Input";
import { convert } from "../assets/images";
import ButtonMini from "../components/Calculate_Button";

const Convert = () => {
  return (
    <section
      id="convert"
      className="flex w-full items-center justify-center max-xl:flex-col-reverse gap-10 max-container relative min-h-screen max-sm:min-h-screen "
    >
      <div className="flex ">
        <img src={convert} alt="calculator"  />
      </div>
      <div className="justify-center max-sm:gap-10 padding-x">
        <h1 className="text-center font-Outfit text-4xl font-bold max-sm:text-[48px] max-sm:mt-20 max-sm:leading-tight leading-none max-sm:font-medium py-16">
          Cryptocurrency<br /> <span className="text-2xl">Converter & Calculator</span>
        </h1>
        <div className="flex max-xl:flex-col p-4 justify-evenly items-center ">
          <div className="flex text-center justify-center gap-5">
            <Input />
            <ButtonMini label="BTC" />
          </div>
          <div className="flex text-center justify-center gap-5">
            <Input />
            <select onSelect="selva">INR</select>
            <ButtonMini label="INR" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convert;
