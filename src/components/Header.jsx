import React from 'react';
import planetImg from '../image/PlanetsOnly.jpg';

function Header() {
  return (
    <div className="header-img">
      <img src={ planetImg } alt="planet" />
    </div>
  );
}

export default Header;
