// this is an ingredient for list
import React, { Component, Fragment } from 'react';

import List from './List/DefaultList'

const IngredientsList = ({ ingredients, title }) => (

  <Fragment>
    <h2>{title}</h2>
    <DefaultList items={ingredients} />
  </Fragment>

);

export default IngredientsList;
