import { FC } from "react";

interface CardProps {
  city: any;
  cities: any;
  setCities: any;
  isFaren: boolean;
}
import { BsFillTrash3Fill } from "react-icons/bs";

const Card: FC<CardProps> = ({ city, cities, setCities, isFaren }) => {
  const tempc = Math.round(city.main.temp - 273.15);
  const tempf = Math.round(tempc * 1.8 + 32);
  const icon = city.weather[0].icon;

  const deleteCity = (city: any) => {
    setCities(cities.filter((c: any) => c.name !== city.name));
  };
  console.log(city.weather);
  return (
    <div className=" w-1/3 max-w-md max-md:w-full bg-white/50  px-6 py-6 rounded-lg shadow-xl">
      <div className="w-full flex justify-center ">
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      </div>
      <div className="flex">
        <div className=" font-medium flex flex-col w-[90%] gap-4 py-4">
          <h2 className="sm:text-xl text-lg">City : {city.name}</h2>
          <h2 className="sm:text-xl text-lg">
            Temperature : {isFaren ? `${tempf} F` : `${tempc} C`}
          </h2>
        </div>
        <div className="mt-4">
          <BsFillTrash3Fill
            className="text-2xl text-gray-600 transition-all hover:-translate-y-1 duration-100 ease-in-out "
            onClick={() => deleteCity(city)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
