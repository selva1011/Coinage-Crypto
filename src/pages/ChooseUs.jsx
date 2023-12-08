import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const ChooseUs = () => {
  return (
    <section id="prefer-us" className="flex justify-center min-h-screen">
      <div className="relative top-28 max-sm:justify-center text-center">
        <h1 className="mb-6 font-Recursive text-[4rem] font-bold max-sm:text-[50px] max-sm:mt-20 max-sm:leading-tight leading-none max-sm:font-bold">
          WHY
          <span className=" max-sm:p-0 text-main"> PREFER US</span>
        </h1>
        <div className="flex justify-evenly gap-5 flex-wrap">
          {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
