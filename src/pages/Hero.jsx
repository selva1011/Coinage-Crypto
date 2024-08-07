import "animate.css";
//import response from "../constants/head_response.json";
import { Ethereum, Bitcoin } from "../assets/images";
import { useState, useEffect } from "react";

const Hero = () => {
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const numberWithIndianCommas = (x) => {
    let parts = x.toString().split(".");
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? "." + parts[1] : "";

    let lastThreeDigits = integerPart.slice(-3);
    let otherDigits = integerPart.slice(0, -3);

    if (otherDigits !== "") {
      lastThreeDigits = "," + lastThreeDigits;
    }

    return (
      otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      lastThreeDigits +
      decimalPart
    );
  };

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${itemsPerPage}&page=1&sparkline=false&x_cg_demo_api_key=CG-5Pd4jW1fQLGWez4vN1p1MzqG
  `;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(3); // Mobile
      } else {
        setItemsPerPage(6); // Desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <div className="flex absolute right-28 max-sm:right-4 max-sm:top-52 overflow-visible pb-32">
          <img
            className="animate__animated animate__bounce animate__infinite animate__slower"
            src={Bitcoin}
            alt="ethereum"
            width={88}
            height={88}
          />
        </div>

        <div className="flex justify-evenly pt-10 items-end  ">
          {data.map((item) => (
            <div className="flex flex-col items-center cursor-pointer max-sm:overflow-hidden">
              <img
                className="h-24 w-24 max-sm:h-12 max-sm:w-12"
                src={item.image}
                alt={item.name}
              />
              <div className="flex font-Outfit text-xl p-3 font-bold">
                <p className="pr-2 max-sm:text-sm">{item.name}</p>
                <p
                  className={
                    "slider-coin__price max-sm:text-sm" +
                    (item.price_change_percentage_24h >= 0
                      ? "text-green-700 max-sm:text-sm"
                      : "text-red-700 max-sm:text-sm")
                  }
                >
                  {item.price_change_percentage_24h?.toFixed(2) + " %"}
                </p>
              </div>
              <p className="font-Outfit text-xl font-semibold max-sm:text-sm">
                {" "}
                {"₹ " + numberWithIndianCommas(item.current_price.toFixed(2))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
