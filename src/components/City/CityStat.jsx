import React from 'react'

const CityStat = ({ label, value }) => (
    <div className="flex  abolute z-[4]">
      <strong>{label}:</strong>
      {value}
    </div>
  );


export default CityStat