import { useState, useEffect } from "react";
//import response from "../constants/response.json";

const Market = () => {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState([]);
  const [apiLoad, setapiLoad] = useState(true);

  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
      className="relative flex flex-col w-full min-h-screen items-center"
    >
      <div className="flex flex-1 justify-evenly px-12">
        <h1 className="font-Outfit font-bold text-4xl mb-5">Market Update</h1>
      </div>

      <table className="flex flex-col flex-nowrap text-center overflow-hidden ">
        <tr className="grid flex-nowrap grid-cols-4 text-2xl font-Recursive mb-5 justify-between gap-8 w-full text-main-1 px-10 rounded-xl text-white max-sm:text-lg relative border-none">
          <th>Coin</th>
          <th>Price</th>
          <th>24h Change</th>
          <th>Market Cap</th>
        </tr>
        <tr className="grid grid-cols-4 flex-nowrap font-Outfit gap-16 justify-between items-center cursor-pointer">
          {data.map((item) => (
            <>
              <>
                <span className="flex items-center gap-5 ">
                  <img className="h-16 w-16" src={item.image} alt={item.name} />
                  <p className="font-Outfit text-xl max-md:hidden">
                    {item.name}
                  </p>
                </span>
                <td>{"₹ " + item.current_price.toFixed(2)}</td>
              </>

              <></>
              <td
                className={
                  "slider-coin__price " +
                  (item.price_change_percentage_24h >= 0
                    ? "text-green-700"
                    : "text-red-700")
                }
              >
                {item.price_change_percentage_24h?.toFixed(2) + " %"}
              </td>
              <td>{"₹ " + numberWithCommas(item.market_cap)}</td>
            </>
          ))}
        </tr>
      </table>
      <div className="flex gap-6 justify-center items-center mt-5">
        {paginationButtons}
      </div>
    </section>
  );
};

export default Market;
