import React, { useContext } from "react";
import { CityContext } from "../../context/cityContext";

const LandContext = ({showContext, city}) => {

  const {addCity} = useContext(CityContext)

  return (
    <div
      className={`${
        showContext ? "flex" : "hidden"
      } absolute right-[-10px] z-[30] landContext  flex-col w-[auto]  rounded-[5px] p-[10px] bg-white text-[10px]`}
    >
      <span className="hover:bg-[red]" onClick={() => addCity(city)}>Build City Here</span>
      {/* <button className="hover:bg-[red]">check Full stats</button> */}
    </div>
  );
};

export default LandContext;
