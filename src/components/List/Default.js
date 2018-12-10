import React from 'react';
import List from './List';
import from uuid from 'uuid';

const Wrapper = ({ children }) => (
  <ul>{children}</ul>
);

// @TODO yes, later, we should replace this "data" argument for a better name.
// right now it's just works and i'm tired
const RenderItem = ({ data }) => {
  console.log(data);
}


// (
//   <li key={data.key}>{data.recipe.title}</li>
// )


const DefaultList = ({ items }) => (
  <Wrapper>
    <List items={items} >
      {(data) =>
        <RenderItem data={data} key={data.key} />
      }
      </List>
  </Wrapper>
);

export default DefaultList;
