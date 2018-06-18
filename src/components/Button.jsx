import React from 'react';

import classnames from 'classnames';


const Button = ({ className, value, ...props }) => {
  return (
  <button className={classnames('button-default', className)} {...props}>{value}</button>
  )};

export default Button;