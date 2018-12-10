import React, { Component, Fragment } from 'react';

// {items.map( (value, index) =>
//   // {console.log(value)}
//   <RenderItem key={index} value={value} />
// )}

// const List = ({ items, children }) => {
//
//   console.log(items);
//
// }

// const ListItem = ({ key, value }) => (
//   <Fragment>
//     {key} - {value}
//   </Fragment>
// );


class List extends Component {

  render() {
    const { items, children } = this.props;
    // const renderItem = ListItem
    // console.log(renderItem);
    console.log(items)
    return (
      <Fragment>

      {items.map( (value, index) =>
        // {console.log(value)}
        // console.log(value, index)
        children(value)
      )}

      </Fragment>
    )
  }

}

export default List;
