import React from 'react';
import riz from "./image/riz.jpg"

const Main = () => {
  return (
    <div className='sub-main'
    style={{backgroundImage : `url(${riz})`,
    backgroundRepeat :"no-repeat",
    backgroundSize :"cover"
    }}>
      <h1>This is heading</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolorum eum quos!</p>
    </div>
  )
}

export default Main

