import React from 'react';
//import Blur from 'react-blur';
import img from '../../assets/animated.png';

const data = () => {
  return (
    <div className="conta">
      <div className="img1" >
        <img className='icon-class' src={img} alt='my na,e'/>
        <div className="overlay">
          <h1>Rehan saboor</h1>
        </div>
      </div>
    </div>
  );
};

export default data;
