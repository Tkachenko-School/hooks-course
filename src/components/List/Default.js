import React from 'react';
import List from './List';


const Wrapper = ({ children }) => (
  <ul>{children}</ul>
);

const RenderItem = ( data ) => {
  console.log(data.key)
  // console.log(key)
  return (<li key={122}>123</li>)

}
//  (
//   <li key={item.key}>{item.recipe}</li>
// );
// {renderItem}
{/*<RenderItem key={data.key} recipe={data.recipe} /> */}
// <List
//   items={items}
//   children={(data) => { console.log(data.key, data.recipe) }
//
//   } />
// children={(data) => { console.log(data.key, data.recipe) } }
const DefaultList = ({ items }) => (
  <Wrapper>
    <List items={items} >
      {(data) =>

          <RenderItem data={data} />

      }
      </List>
  </Wrapper>
);

export default DefaultList;
