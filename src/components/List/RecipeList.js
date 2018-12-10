import React from 'react';
import List from './List';

import RecipeCard from './Card/Small';

const Wrapper = ({ children }) => (
  <div className="recipe-group">{children}</div>
);

const renderItem = ({ key, value }) => (
  <RecipeCard key={key} data={value} />
);


// @TODO yes, later, we should replace this "data" argument for a better name.
// right now it's just works and i'm tired
const RenderItem = ({ data }) => (
  <li key={data.key}>{data.recipe.title}</li>
)


const RecipeList = ({ items }) => (
  <Wrapper>
    <List items={items} >
      {(data) =>
        <RenderItem data={data} key={data.key} />
      }
      </List>
  </Wrapper>
);

export default RecipeList;
