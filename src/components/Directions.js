// this is an directions(i.e. steps) for list
import React, { Component, Fragment } from 'react';

import List from './List/DefaultList'

const DirectionsList = ({ directions, title }) => (

  <Fragment>
    <h2>{title}</h2>
    <DefaultList items={ingredients} />
  </Fragment>

);
