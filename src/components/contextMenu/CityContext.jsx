import React, { useState } from "react";

export const CityInfoContext = ({
  showContext,
  city,
  setIsBuilding

}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showAction, setShowAction] = useState(false);

  const { efficiency, cEnergyTax, cEfficiencyRequirement, population } = city;
  const cityStats = [
    { label: "Efficiency", value: efficiency },
    { label: "Energy Tax", value: cEnergyTax },
    { label: "Efficiency Requirement", value: cEfficiencyRequirement },
    { label: "Population", value: population },
  ];

  const handleBuild = () => {};
  const showStats = () => {};

  const CityStat = ({ label, value }) => (
    <div className="flex  abolute z-[4]"> 
      <strong>{label}:</strong>{value}
    </div>
  );

const CityActions = ({showAction}) => {
  const [message, setMessage] = useState('');
  
  const handleClick = (event) => {
    event.stopPropagation()
    setMessage(event.target.value)
    console.log("message:", event.target)
  }

  const actions = [
    { label: 'Build Structure', onClick: (event) => setIsBuilding(true) },
    { label: 'Attack City', onClick: (event) =>  handleClick(event)},
    { label: 'Destroy City', onClick: (event) =>  handleClick(event) }
  ];

  return (
    <div className={`${
      showAction ? "flex" : "hidden"
    } flex-col absolute w-[100%]  left-[100px] top-0 z-[4] p-[10px] pl-[0px]`}>
      {actions.map((action, index) => (
        <p
          key={index}
          onClick={(event) => action.onClick(event)}
          className=""
          style={{ cursor: 'pointer',  }}
        >
          {action.label}
        </p>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
};

  

  return (
    <div
      className={`${
        showContext ? "flex" : "hidden"
      } relative z-[4] flex-col w-[100px] h-[auto] rounded-[10px] p-[10px] bg-white ml-[-20px]  text-[10px]`}
    >
      <div className="flex flex-col">
        <span
          className="hover:bg-[red]"
          onClick={(event) => {
            event.stopPropagation();
            setShowAction(!showAction);
          }}
        >
          show actions
        </span>
        <span
          className="hover:bg-[red]"
          onClick={(event) => {
            event.stopPropagation();
            setShowInfo(!showInfo);
          }}
        >
          show Stats
        </span>
      </div>
        {<CityActions showAction={showAction} />}
      <div
        className={`${
          showInfo ? "flex" : "hidden"
        } flex-col`}
      >
        {cityStats.map((stat, index) => (
          <CityStat key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

