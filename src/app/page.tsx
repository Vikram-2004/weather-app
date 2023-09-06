"use client";
import Input from "./components/Input";
import { useState } from "react";
import Card from "./components/Card";

export default function Home() {
  const [cities, setCities] = useState<any>([]);
  const [search, setSearch] = useState<string>("");

  const addCity = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.NEXT_PUBLIC_API_KEY}&q=${search}`
      );
      const weather = await response.json();
      if (weather.cod === "404") {
        alert("city is not found");
      } else {
        setCities([weather, ...cities]);
        setSearch("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [isToggled, setToggled] = useState(false);
  const toggle = () => {
    setToggled(!isToggled);
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen w-full relative py-20">
      <h1 className="md:text-6xl text-4xl text-center text-white  pb-16 font-bold px-4">
        Weather Application
      </h1>

      <div className="flex w-full justify-center px-4 gap-4">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Enter your city"
        />
        <button
          className="hover:bg-gray-700 py-2 rounded-lg bg-black text-white text-md border-0 transition-all hover:-translate-y-1 duration-150 px-6 ease-in-out"
          onClick={addCity}
        >
          Add
        </button>
      </div>

      <div className="text-2xl flex gap-2 font-bold justify-center mt-6 text-white">
        <span>C</span>
        <button
          className={`w-16 h-8 bg-gray-300 rounded-full p-1 duration-300 ease-in-out  ${
            isToggled ? "bg-blue-500" : ""
          }`}
          onClick={toggle}
        >
          <div
            className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
              isToggled ? "translate-x-8 " : ""
            }`}
          ></div>
        </button>
        <span>F</span>
      </div>

      <div className="w-full flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-8 mt-20 justify-center gap-4 px-6">
        {cities.map((c: any) => {
          return (
            <Card
              key={c.name}
              city={c}
              cities={cities}
              setCities={setCities}
              isFaren={isToggled}
            />
          );
        })}
      </div>
    </div>
  );
}
