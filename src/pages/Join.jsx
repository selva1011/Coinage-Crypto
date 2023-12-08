import "animate.css";
import { bitcoinAni, tetherAni, bnbAni } from "../assets/images";
import Button from "../components/Button";

const Join = () => {
  return (
    <section
      id="join"
      className="flex w-full items-center justify-center max-xl:flex-col-reverse gap-10 max-container relative min-h-screen"
    >
      <div>
        <div className="flex relative justify-center top-[6.2rem]">
          <img
            className="animate__animated animate__infinite	animate__slow animate__wobble animate__delay-2s	"
            src={bnbAni}
            alt="bnb"
            height={90}
            width={90}
          />
        </div>
        <div className="flex relative justify-evenly items-center top-[8.25rem] gap-x-[33rem] max-sm:hidden">
          <img
            className="animate__animated animate__infinite	animate__shakeX animate__slower animate__delay-2s	"
            src={bitcoinAni}
            alt="bitcoin"
            height={90}
            width={90}
          />
          <img
            className="animate__animated animate__infinite	animate__shakeY animate__slower animate__delay-2s	"
            src={tetherAni}
            alt="tether"
            height={90}
            width={90}
          />
        </div>
        <div className="flex flex-col max-sm:justify-center text-center">
          <h1 className="font-Recursive text-8xl font-bold max-sm:text-[50px] max-sm:mt-20 max-sm:leading-tight leading-none max-sm:font-bold">
            JOIN US VIA
            <br />
            <span className="max-sm:p-0 text-main"> DISCORD</span>
          </h1>
          <p className="font-Outfit text-2xl font-medium mt-4">
            Track Your Crypto coins Every day with Hassle Free!
          </p>
          <div className="flex items-center justify-center mt-24">
            <Button label="Join via Discord" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
