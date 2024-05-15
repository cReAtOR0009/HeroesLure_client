import React from "react";

const LandContext = ({showContext}) => {
  return (
    <div
      className={`${
        showContext ? "flex" : "hidden"
      } absolute right-[-10px] z-[30] landContext  flex-col w-[auto]  rounded-[5px] p-[10px] bg-white text-[10px]`}
    >
      <span className="hover:bg-[red]">Build City Here</span>
      {/* <button className="hover:bg-[red]">check Full stats</button> */}
    </div>
  );
};

export default LandContext;
