import React from 'react';
import List from './List';

import RecipeCard from './Card/Small';

const Wrapper = ({ children }) => (
  <div className="recipe-group">{children}</div>
);

const renderItem = ({ key, value }) => (
  <RecipeCard key={key} data={value} />
);

const RecipeList = ({ items }) => (
  <Wrapper>
    <List items={items} renderItem={renderItem} />
  </Wrapper>
);

export default RecipeList;
