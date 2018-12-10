import React, { Component, Fragment } from 'react';

import Title from ''
import Image from ''
import Directions from ''
import Ingredients from ''
import Button from ''
import Link from ''


const RecipeCardLayout = ({ id, name, imageUrl, directions, ingredients,  }) => (
  <Fragment>
    <Title />
    <Image />
    <Directions />
    <Ingredients />
    <Button />
    <Link />
  </Fragment>
);
export default RecipeCardLayout;


const RecipeFullLayout = ({ id, name, categories, author, ingredients, directions }) => (
  <Fragment>



  </Fragment>
);
export default RecipeFullLayout;


const RecipeBodyLayout = ({}) => (
  <Fragment>

  </Fragment>
);
export default RecipeBodyLayout;


const RecipeListLayout = ({}) => (
  <Fragment>

  </Fragment>
);
export default RecipeListLayout;
