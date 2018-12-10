import React, { Component, Fragment } from 'react';

// {items.map( (value, index) =>
//   // {console.log(value)}
//   <RenderItem key={index} value={value} />
// )}


class List extends Component {

  render() {
    const { items, children } = this.props;

    return (
      <Fragment>

        {items.map( (value) =>
          // {console.log(value)}
          // children(value.key, value.recipe)
          // console.log(value)
          children(value)
        )}

      </Fragment>
    )
  }

}

export default List;
