import React, { useState } from 'react'
import { citiesData } from '../../public/cities'

const LeftSide = () => {


  return (
    <div className='fixed top-[150px] left-0 flex flex-col bg-black  h-[100vh] w-[300px] px-[20px] py-[30px]'>
      <div>
        logo here
      </div>
      <div>
        search: <input type="text" />
        <select name="" id="">
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