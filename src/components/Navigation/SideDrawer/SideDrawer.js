import React from 'react';

import classes from './SideDrawer.module.css';

import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = props => {
  // Animation to slide in & out
  const attachedClasses = props.open ? [classes.Open] : [classes.Close];
  attachedClasses.push(classes.SideDrawer);

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
