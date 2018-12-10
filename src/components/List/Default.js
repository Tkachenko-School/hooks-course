import React from 'react';
import List from './List';


const Wrapper = ({ children }) => (
  <ul>{children}</ul>
);

const RenderItem = ({ key, value }) => (
  <li key={key}>{value}</li>
);
// {renderItem}
const DefaultList = ({ items }) => (
  <Wrapper>
    <List items={items} children={ (data) =>  <RenderItem {...data} />} />
  </Wrapper>
);

export default DefaultList;
