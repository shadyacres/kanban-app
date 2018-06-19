import React from 'react';
import Altcontainer from 'alt-container';
import alt from '../../libs/alt';
import setup from './setup';

setup(alt);

const Provider = ({ children }) =>
  <Altcontainer flux={alt}>
    {children}
  </Altcontainer>

  export default Provider;