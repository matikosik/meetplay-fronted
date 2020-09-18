import React from 'react';

import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ receiver }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>{receiver}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/chat"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;