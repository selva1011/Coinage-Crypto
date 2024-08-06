import { useState, useEffect } from "react";
//import response from "../constants/response.json";
import { HashLoader } from "react-spinners";

const Market = () => {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loaderStyle = {
    display: "absolute",
    margin: "0 auto",
    borderColor: "#ec38bc",
  };

  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&x_cg_demo_api_key=CG-5Pd4jW1fQLGWez4vN1p1MzqG`;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

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

  const truncateString = (str) => {
    if (str.length > 15) {
      return str.substring(0, 15 ) + "...";
    }
    return str;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [URL]);

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setcurrentPage(i)}
        className={`font-Outfit w-12 h-12 cursor-pointer rounded-full text-xl ${
          i === currentPage ? "text-main-1	text-white" : ""
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <section
      id="cryptocurrency"
      className="relative flex flex-col w-full items-center padding-x max-w-[1440px] m-auto"
    >
      <div className="flex justify-center">
        <h1 className="font-Outfit font-bold text-4xl mb-5">Market Update</h1>
      </div>
      {loading && <HashLoader color="#ec38bc" cssOverride={loaderStyle} />}
      <div className="w-full h-auto flex flex-col whitespace-nowrap overflow-x-auto">
        <div className=" market-content__coin-list__top ">
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>
        <div className="flex flex-col w-full font-Outfit gap-16 justify-between items-center cursor-pointer">
          {data.map((item) => (
            <div className="grid grid-cols-[16fr,25fr,25fr,25fr]  p-6 text-right font-medium rounded-t-lg gap-8">
              <>
                <span className="flex items-center gap-5 ">
                  <img className="h-16 w-16" src={item.image} alt={item.name} />
                  <p className="font-Outfit text-xl max-md:hidden">
                    {truncateString(item.name)}
                  </p>
                </span>
                <p>
                  {"₹ " + numberWithIndianCommas(item.current_price.toFixed(2))}
                </p>
              </>

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
              <p>{"₹ " + numberWithIndianCommas(item.market_cap)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-6 justify-center items-center mt-5">
        {paginationButtons}
      </div>
    </section>
  );
};

export default Market;
