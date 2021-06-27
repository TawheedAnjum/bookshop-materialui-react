import React from 'react';

import HeaderBackground from './HeaderBackground';
import Navbar from './Navbar';

import Carousel from "react-material-ui-carousel";

import header1 from "../../assets/images/header1.jpg";
import header2 from "../../assets/images/header2.jpg";
import header3 from "../../assets/images/header3.jpg";

function Header() {
  const backgroundItem = [header1, header2, header3];
  return (
    <div>
      <Carousel animation="slide" interval="10000">
        {backgroundItem.map((item, i) => (
          <HeaderBackground key={i} headerImage={item} />
        ))}
      </Carousel>
      <Navbar />
    </div>
  );
}

export default Header
