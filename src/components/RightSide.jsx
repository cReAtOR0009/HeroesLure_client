import React from 'react'
import TestComponent from './TestComponent'

const RightSide = () => {
  return (
    <>
    <div className='fixed top-[100px] right-0 h-[100vh] w-[300px] bg-transparent'>rightSide
      <TestComponent />
    </div>
    </>
  )
}

export default RightSide