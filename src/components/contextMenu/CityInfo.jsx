import React from "react";

const CityInfo = ({ props }) => {
  const { efficiency, cEnergyTax, cEfficiencyRequirement, population } = props;
  const cityStats = [
    { label: "Efficiency", value: efficiency },
    { label: "Energy Tax", value: cEnergyTax },
    { label: "Efficiency Requirement", value: cEfficiencyRequirement },
    { label: "Population", value: population },
  ];

  // console.log("cityStats:", cityStats);
  const CityStat = ({ label, value }) => (
    <div className="flex  z-[4] text-[10px] bg-[white]">
      <div>{label}:</div>
      {value}
    </div>
  );

  return (
    <>
      <div className={`absolute top-0 flex flex-col`}>
        <div className="relative flex flex-col left-[50px] ">
          <button className="text-[10px] bg-[white]">
            click for Actions
          </button>

          {cityStats.map((stat, index) => (
            <CityStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CityInfo;
