import React, { useState } from 'react'
import { citiesData } from '../../public/cities'

const LeftSide = () => {

  const [searchFilter, setSearchFilter] = useState({})
  console.log("searchFilter:", searchFilter)

  const filterCities = (cities, filters) => {
    return cities.filter(city => {
      // Check if any filter criteria match
      return Object.entries(filters).every(([key, value]) => {
        if (key === 'buildingsLength') {
          return city.buildings.length >= value;
        } else if (key === 'citizens') {
          return city.citizens.includes(value);
        } else {
          return city[key] === value;
        }
      });
    });
  };

  const handleChange = (event) => {
    event.preventDefault()
    // console.log("evenst", event)
    const {value} =  event.target
    setSearchFilter(prevState => ({ ...prevState, value }));
  }
  return (
    <div className='fixed top-[100px] left-0 flex flex-col  h-[100vh] w-[300px] px-[20px] py-[30px] bg-transparent'>
      <div>
        logo here
      </div>
      <div>
        search: <input type="text" />
        <select name="" id="" onChange={(events) => handleChange(events)}>
          <option value={""}>filter by</option>
          <option >City</option>
          <option>population</option>
          <option>No. Buildings</option>
          <option>Address</option>
          <option>Energy</option>
          <option>Victories</option>
        </select>
      </div>

      <div>

      </div>


    </div>
  )
}

export default LeftSide