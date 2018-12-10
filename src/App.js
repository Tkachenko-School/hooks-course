import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';

import { getFirstFiveRecipes } from './selectors/selector';
import DefaultList from './components/List/DefaultList';


class App extends Component {
  render() {

    // console.log(getRecipe());
    // const recipes = getRecipe();
    // const five = recipes.slice(0, 5);
    // console.log(getFirstFiveRecipes());
    return (
      <div className="App">

      <DefaultList items={["First", "Second", "Thirld"]} />

      {/*<RecipeList items={getFirstFiveRecipes()} /> */}


      {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        */}

      </div>
    );
  }
}

export default App;
