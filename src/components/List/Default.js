import React from 'react';
import List from './List';

const Wrapper = ({ children }) => (
  <ul>{children}</ul>;
);

const renderItem = ({ key, value }) => (
  <li key={key}>{value}</li>
);

const DefaultList = ({ items }) => (
  <Wrapper>
    <List items={items} renderItem={renderItem}>
  </Wrapper>
);

export default DefaultList;
