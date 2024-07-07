import "animate.css";
//import response from "../constants/head_response.json";
import { Ethereum, Bitcoin } from "../assets/images";
import { useState, useEffect } from "react";

const Hero = () => {
  const [data, setData] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=5&page=1&sparkline=false
  `;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);

  return (
    <section
      id="home"
      className="flex w-full min-h-screen max-container relative"
    >
      <div className="flex flex-col justify-center w-full max-xl:padding-x absolute top-36">
        <h1 className="flex flex-col font-Outfit text-8xl font-extrabold max-sm:text-[50px]  max-sm:mt-20 max-sm:justify-center items-center text-center max-sm:leading-tight leading-none max-sm:font-bold">
          <span className="p-2 max-sm:p-0 animate__animated animate__backInDown	">
            NAVIGATING THE
          </span>
          <span className="p-2 max-sm:p-0 text-main animate__animated animate__backInDown ">
            CRYPTO REVOLUTION
          </span>
        </h1>
        <div className="flex absolute left-28 max-sm:left-4 max-sm:top-52 overflow-visible pb-32">
          <img
            className="animate__animated animate__bounce animate__infinite animate__slower"
            src={Ethereum}
            alt="ethereum"
            width={90}
            height={90}
          />
        </div>
        <div className="flex absolute right-28 max-sm:right-4 max-sm:top-2 overflow-visible pb-32">
          <img
            className="animate__animated animate__bounce animate__infinite animate__slower"
            src={Bitcoin}
            alt="ethereum"
            width={88}
            height={88}
          />
        </div>

        <div className="flex justify-evenly pt-10 items-end max-sm:hidden ">
          {data.map((item) => (
            <div className="flex flex-col items-center cursor-pointer">
              <img className="h-24 w-24" src={item.image} alt={item.name} />
              <div className="flex font-Outfit text-xl p-3 font-bold">
                <p className="pr-2">{item.name}</p>
                <p
                  className={ 
                    "slider-coin__price " +
                    (item.price_change_percentage_24h >= 0
                      ? "text-green-700"
                      : "text-red-700")
                  }
                >
                  {item.price_change_percentage_24h?.toFixed(2) + " %"}
                </p>
              </div>
              <p className="font-Outfit text-xl font-semibold">
                {" "}
                {"₹ " + item.current_price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
