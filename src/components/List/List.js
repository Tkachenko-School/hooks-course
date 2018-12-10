import React, { Component, Fragment } from 'react';

// {items.map( (value, index) =>
//   // {console.log(value)}
//   <RenderItem key={index} value={value} />
// )}

const List = ({ items, children }) => {

  console.log(items)

}


// class List extends Component {
//
//   render() {
//     const { items } = this.props;
//     // console.log(renderItem);
//     // console.log(items)
//     return (
//       <Fragment>
//         // {(items) =>  {
//         //     items.map( (value, index) => {console.log(value)}
//         // }}
//
//       </Fragment>
//     )
//   }
//
// }

export default List;
