import React from 'react';

// Make webpack aware that we are using the image, so it can link the image here.
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="BurgerLogo"/>
    </div>
  );
};

export default logo;
