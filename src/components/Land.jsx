import React, { useState } from "react";
import LandContext from "./contextMenu/LandContext";

const Land = (...props) => {
  const [showContext, setShowContext] = useState(false);
  console.log("props.id", props[0].id)
  // const landColumn = Math.floor((Number(props[0].id) * 100) % 15)


  const handleContext = (event) => {
    event.preventDefault();
    const containerRect = event.currentTarget.getBoundingClientRect();
    const xRelativeToContainer = event.clientX - containerRect.left;
    const yRelativeToContainer = event.clientY - containerRect.top;
    const landColumn = ((Number(props[0].id)) % 15)
    const landRow =  Math.floor(((Number(props[0].id)) / 15))
    console.log("landColumn: x position", landColumn)
    console.log("landRow: y position", landRow)
    console.log('X Position of land relative to container:', xRelativeToContainer);
    console.log('Y Position of Land relative to container:', yRelativeToContainer);
    setShowContext(true);
    console.log("land details:", props)
  };
  return (
    <div
      className={`w-[100px] h-[100px] relative z-[1] scale-[1] bg-white hover:bg-[yellow] `}
      onClick={() => setShowContext(true)}
      onContextMenu={(event) => handleContext(event)}
      onMouseEnter={(event) => handleContext(event)}
      onMouseLeave={() => setShowContext(false)}
    >
      <LandContext showContext={showContext} />
    </div>
  );
};

export default Land;
