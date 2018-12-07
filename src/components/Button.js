import React, { Component } from 'react';

const Button = ({ url, title }) => (
  <Link to={url}>{title}</Link>
);

export default Button;
