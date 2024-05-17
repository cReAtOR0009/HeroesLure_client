import React, { useState, useContext, useId } from "react";
import { CityContext } from "../context/cityContext";
import { CityInfoContext } from "./contextMenu/CityContext";
import Building from "./City/Building";
import InputField from "./City/InputField";
import { styles } from "../styles/styles";
import CityStat from "./City/CityStat";
import City from "./TestComponent";

const CityOverlay = ({ props, showCity, setShowCity }) => {
  if (!showCity) return null;
  const {
    cEfficiencyRequirement,
    cEnergyTax,
    citizens,
    efficiency,
    energy,
    population,
    id
  } = props;
  const cityStats = [
    { label: "Efficiency", value: efficiency },
    { label: "Energy Tax", value: cEnergyTax },
    { label: "Efficiency Requirement", value: cEfficiencyRequirement },
    { label: "energy", value: energy },
    { label: "citizens", value: citizens },
    { label: "Population", value: population },
  ];

  const buildingsArray = [
    {
      type: "House",
    },
    {
      type: "Bakery",
    },
    {
      type: "Goldmine",
    },
  ];

  const InputArray = [
    {
      name: "cityName",
      label: "City Name",
      placeholder: "city name",
      type: "text",
    },
    {
      name: "Max Energy Req",
      label: "Max Energy",
      placeholder: "set Max Energy",
      type: "text",
    },
    {
      name: "Max Energy Req",
      label: "Max Energy",
      placeholder: "set Max Energy",
      type: "text",
    },
  ]


  const [activeTab, setActiveTab] = useState("checkStats");
  const { addBuilding } = useContext(CityContext);
  const [building, setBuilding] = useState({
    id: useId(),
    cityId:id,
    owner: "connected Address",
    type: "House",
    details: {},
    xlocation: "",
    ylocation: "",
  });

  const updatesBuilding = (event) => {
    const { value, name } = event.target;
    setBuilding((prevBuild) => ({
      ...prevBuild,
      [name]: value,
    }));
  };

  const handleBuildType = (type) => {
    setBuilding((prevBuild) => ({
      ...prevBuild,
      type: type,
    }));
  };



  // const { addBuilding } = useContext(CityContext);
  // const scaleX = 1;
  // // const { buildings } = props;
  // const [showContext, setShowContext] = useState(false);
  // const [isBuilding, setIsBuilding] = useState(false);
  // const [highlightPosition, setHighlightPosition] = useState({
  //   top: 0,
  //   left: 0,
  //   visible: false,
  // });
  // const [building, setBuilding] = useState({
  //   id: "",
  //   type: "",
  //   xlocation: setHighlightPosition.left,
  //   ylocation: setHighlightPosition.top,
  // });

  // const handleMouseMove = (event) => {
  //   if (!isBuilding) return;

  //   const rect = event.currentTarget.getBoundingClientRect();
  //   const offsetX = event.clientX - rect.left;
  //   const offsetY = event.clientY - rect.top;

  //   const gridSize = 10;
  //   // Calculate the nearest grid position
  //   const top = Math.floor(offsetY / gridSize) * gridSize;
  //   const left = Math.floor(offsetX / gridSize) * gridSize;
  //   // console.log(first)

  //   setHighlightPosition({
  //     top: Math.min(top, 90),
  //     left: Math.min(left, 90),
  //   });
  // };

  // const buildStructure = (event) => {
  //   console.log("building:", building);
  //   event.stopPropagation();
  //   setIsBuilding(true);
  //   setShowContext(false);
  //   addBuilding({ id, building });
  //   console.log("buildStructure clicked");
  // };

  // const handleMouseLeave = () => {
  //   if (isBuilding) setIsBuilding(false);
  //   setShowContext(false);
  // };

  return (
    <>
      <div
        className={`${
          showCity ? "flex" : "hidden"
        } fixed justify-center top-0 bottom-0 right-0 items-center bg-blackTransparent z-[5]  w-screen h-screen `}
      >
        <div
          className="cursor-pointer absolute  z-[6] right-[100px] top-10 text-[30px]"
          onClick={() => setShowCity(false)}
        >
          X
        </div>
        {/* <City /> */}
        <div className="relative z-[5]  w-[100vw] h-screen bg-cityBg bg-no-repeat bg-center m-[100px]">
          <div className="relative w-full h-full">
            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <div className="flex p-[10px] gap-[10px]">
                <button
                  onClick={() => setActiveTab("addbuilding")}
                  className={`${
                    activeTab === "addbuilding"
                      ? "bg-[#3e2813] text-white"
                      : "bg-[#ba772b]"
                  } rounded-[10px] px-[20px] py-[10px] bg-[#ba772b]`}
                >
                  Add Building
                </button>
                <button
                  onClick={() => setActiveTab("checkStats")}
                  className={` ${
                    activeTab === "checkStats"
                      ? "bg-[#3e2813] text-white"
                      : "bg-[#ba772b]"
                  } rounded-[10px] px-[20px] py-[10px]`}
                >
                  Check City Stats
                </button>
                <button
                  onClick={() => setActiveTab("attackCity")}
                  className={` ${
                    activeTab === "attackCity"
                      ? "bg-[#3e2813] text-white"
                      : "bg-[#ba772b]"
                  } rounded-[10px] px-[20px] py-[10px] bg-[#ba772b]`}
                >
                  Attack City
                </button>
              </div>
              <div
                className={`${
                  activeTab === "addbuilding" ? "flex" : "hidden"
                }  w-full h-[200px]`}
              >
                {buildingsArray.map((build, index) => (
                  <Building key={index} type={build.type} handleBuildType={handleBuildType} activeBuilding={building.type} />
                ))}
               
              </div>
              <div
                className={`${
                  activeTab === "checkStats" ? "block" : "hidden"
                } items-stretch justify-stretch w-full h-[200px]`}
              >
                {cityStats.map((stat, index) => (
                  <CityStat key={index} {...stat} />
                ))}
              </div>
              <div
                className={`${
                  activeTab === "attackCity" ? "flex" : "hidden"
                } w-full h-[200px]`}
              >
                Attack city
              </div>
            </div>
          </div>
          <form
            action=""
            method="get"
            className="flex absolute bottom-10 z-[6]   right-1/4"
          >
            {InputArray.map((input, index) => {
              return <InputField key={index} {...input} styles={styles.inputFied} onChange={updatesBuilding}/>
            })}
          </form>
        </div>
      </div>
    </>
  );
};

export default CityOverlay;
