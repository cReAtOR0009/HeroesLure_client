import React, { useState } from "react";



export const CityInfoContext = ({ showInfoContext, setInfoContext, city, setShowAction, showAction }) => {

const handleMouseLeave = () => {
  console.log("mouse left box")
  setInfoContext(false)
  setShowAction(false)
}

return (
    <div
      className={`${
        showInfoContext ? "flex" : "hidden"
      } relative z-[10] flex-col w-[100px] h-[auto] rounded-[10px] p-[10px] bg-white ml-[-20px]  text-[10px]`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="">
        <span onClick={() => setShowAction(init => !init) } className="block hover:bg-[red]">{city.name}</span>
        <div className={`${showAction?"flex":"hidden"} flex-col absolute z-[10] left-[90px] top-0 w-[100px] bg-white p-[10px]`}>
          <span className="hover:bg-[red]">{city.name}</span>
          <span className="hover:bg-[red]">Make Building</span>
          <span className="hover:bg-[red]">Check city Stats</span>
        </div>
      </div>
      <span className="hover:bg-[red]">
        No of Buildings{city.buildings.length}
      </span>
      <span className="hover:bg-[red]">Efficiency: {city.efficiency}</span>
      <span className="hover:bg-[red]">EnergyTax: {city.cEnergyTax}</span>
      <span className="hover:bg-[red]">
        EnergyReq: {city.cEfficiencyRequirement}
      </span>
      <span className="hover:bg-[red]">
        CityContract: {city.avatarContractAddress}
      </span>
      <span className="hover:bg-[red]">City Population: {city.population}</span>
      {/* <span className="hover:bg-[red]">check Full stats</span> */}
      {/* <span className="hover:bg-[red]">{stats.city}</span> */}
    </div>
  );
};



// export default CityInfoContext
