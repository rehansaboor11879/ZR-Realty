import React from 'react';
import Blur from 'react-blur';
import img1 from '../../assets/whatsapp.png';
import img from '../../assets/Rehan.png';
const data = () => {
  return (
    <div className="conta">
      <Blur className="img1 " img={img} blurRadius={20} enableStyles>
        <img className="center_slide" src={img1} alt="my1" />
        <div className="overlay">
          <h1>Rehan saboor</h1>
        </div>
      </Blur>
    </div>
  );
};

export default data;
