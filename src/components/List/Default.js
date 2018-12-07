import React from 'react';
import List from './List';

const Wrapper = ({ children }) => (
  <ul>{children}</ul>;
);

const renderItem = ({ key, value }) => (
  <li key={key}>{value}</li>
);
