import React, { useState } from 'react';
// import './City.css'; // Assuming you have some CSS for styling

const City = () => {
  const [buildings, setBuildings] = useState([]);
  const [hoveredSpace, setHoveredSpace] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [newBuildingDetails, setNewBuildingDetails] = useState({
    name: '',
    type: '',
    // Add other details here
  });

  const handleAddBuilding = () => {
    setPopupVisible(true);
  };

  const handleSaveBuilding = () => {
    setBuildings([...buildings, { ...newBuildingDetails, x: hoveredSpace.x, y: hoveredSpace.y }]);
    setPopupVisible(false);
    setNewBuildingDetails({
      name: '',
      type: '',
      // Reset other details
    });
  };

  return (
    <div className="city" onMouseLeave={() => setHoveredSpace(null)}>
      {/* Render city grid with highlighted spaces */}
      <div className="grid">
        {/* You can dynamically render your grid here */}
        {/* Example: */}
        {Array.from({ length: 10 }, (_, i) =>
          Array.from({ length: 10 }, (_, j) => {
            const position = { x: i, y: j };
            const isHighlighted = hoveredSpace && hoveredSpace.x === i && hoveredSpace.y === j;
            return (
              <div
                key={`${i}-${j}`}
                className={`grid-space ${isHighlighted ? 'highlighted' : ''}`}
                onMouseEnter={() => setHoveredSpace(position)}
                onClick={handleAddBuilding}
              />
            );
          })
        )}
      </div>
      
      {/* Render existing buildings */}
      {buildings.map((building, index) => (
        <div key={index} className="building" style={{ left: building.x * 50, top: building.y * 50 }}>
          {/* Render building details */}
          <div>Name: {building.name}</div>
          <div>Type: {building.type}</div>
          {/* Render other details */}
        </div>
      ))}

      {/* Popup for adding a new building */}
      {popupVisible && (
        <div className="popup">
          <input
            type="text"
            value={newBuildingDetails.name}
            onChange={(e) => setNewBuildingDetails({ ...newBuildingDetails, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="text"
            value={newBuildingDetails.type}
            onChange={(e) => setNewBuildingDetails({ ...newBuildingDetails, type: e.target.value })}
            placeholder="Type"
          />
          {/* Add other inputs for other details */}
          <button onClick={handleSaveBuilding}>Save</button>
        </div>
      )}
    </div>
  );
};

export default City;
