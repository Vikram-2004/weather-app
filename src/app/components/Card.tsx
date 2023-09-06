import { FC } from "react";

interface CardProps {
  city: any;
  cities: any;
  setCities: any;
}
import { BsFillTrash3Fill } from "react-icons/bs";

const Card: FC<CardProps> = ({ city, cities, setCities }) => {
  const temp = Math.round(city.main.temp - 273.15);

  const deleteCity = (city: any) => {
    setCities(cities.filter((c: any) => c.name !== city.name));
  };
  return (
    <div className=" w-1/3 max-w-md max-md:w-full bg-white/50  px-4 py-6">
      <div className="flex">
        <div className=" font-medium flex flex-col w-[90%] gap-4 py-4">
          <h2 className="sm:text-xl text-lg">CITY : {city.name}</h2>
          <h2 className="sm:text-xl text-lg">TEMPERATURE : {temp} C</h2>
        </div>
        <div className="mt-4">
          <BsFillTrash3Fill
            className="text-2xl "
            onClick={() => deleteCity(city)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
