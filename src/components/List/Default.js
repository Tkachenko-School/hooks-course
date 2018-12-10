import React from 'react';
import List from './List';
import shortid from 'shortid';

const Wrapper = ({ children }) => (
  <ul>{children}</ul>
);

const RenderItem = ({ value }) => (
  <li key={shortid()}>{value}</li>
);
// {renderItem}
const DefaultList = ({ items }) => (
  <Wrapper>
    <List items={items} children={ (data) =>  <RenderItem {...data} />} />
  </Wrapper>
);

export default DefaultList;
