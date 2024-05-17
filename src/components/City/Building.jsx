import React from 'react'

const Building =({ type, handleBuildType,activeBuilding }) => {
    // console.log(first)
    return (
      <div
        onClick={() => handleBuildType(type)}
        className={`${activeBuilding === type?"bg-[#a26e20]":""} flex-1 cursor-pointer`}
      >
        {type}    
      </div>
    );
  };

export default Building