import React from 'react';
import ReactPlayer from 'react-player';

const videoWIthText = () => {
  return (
    <div>
      <ReactPlayer
        className="react-player fixed-bottom"
        url="./Real_estate.mp4"
        width="100%"
        height="800px"
        controls={false}
        playing={true}
        muted={true}
        loop={true}
      />
    </div>
  );
};

export default videoWIthText;
