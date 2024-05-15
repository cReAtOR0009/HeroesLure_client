import React, {useState} from "react";


export const BuildingContext = ({ showContext, city, type, xlocation, ylocation }) => {
  const [showAction, setShowAction] = useState(false)
  const [showStats, setShowStats] = useState(false)
  return (
    <div
      className={`${
        showContext ? "flex" : "hidden"
      } relative z-[50] flex-col w-[150px] h-[60px] rounded-[10px] p-[10px] bg-white text-[10px]`}
    >
      <div className="relative z-[50]">
        <span onClick={() => setShowAction(!showAction)}>show building Actions</span>
        <div className={`${showAction?"flex":"hidden"} flex-col absolute z-[5] top-0 left-[150px] w-[100px]` }>
          <span className="hover:bg-[red]">Destroy {type}</span>
          <span className="hover:bg-[red]">x: {xlocation}</span>
          <span className="hover:bg-[red]">y: {ylocation}</span>
          <span className="hover:bg-[red]">city: {city.name}</span>
        </div>
      </div>
      <span className="hover:bg-[red]" onClick={() => setShowStats(!showStats)}>check Full stats</span>
      <div>
        <div
          className={`${
            showStats ? "flex" : "hidden"
          } absolute top-[50px] left-[150px] z-[5] flex-col w-[100px] h-[70px]  rounded-[10px] p-[10px] bg-white ml-[-2px] text-[10px]`}
        >
          <span className="hover:bg-[red]">{city.name}</span>
          {/* <span className="hover:bg-[red]">{stats.city}</span>
          <span className="hover:bg-[red]">{stats.buildingName}</span> */}
        </div>
      </div>
    </div>
  );
};
