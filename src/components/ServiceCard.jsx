const ServiceCard = ({imgURL, label, subtext}) => {
    return (
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl p-6">
          <div className="flex justify-center items-center rounded-full">
              <img 
                  src={imgURL} 
                  alt={label}
                  height={300}
                  width={300} />
          </div>
          <h3 className="mt-1 font-Outfit text-3xl leading-normal font-bold">
              {label}
          </h3>
          <p className="mt-2 break-words text-lg font-Outfit leading-normal">
              {subtext}
          </p>
      </div>
    )
  }
  
  export default ServiceCard