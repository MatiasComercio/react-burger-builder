import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
      className={classes.Modal}>
      {props.children}
    </div>
  </Aux>
);

const areEqual = (prevProps, nextProps) => nextProps.show === prevProps.show;

export default React.memo(modal, areEqual);
