import MealName    from ''
import ImageUrl    from ''
import Ingredient  from ''
import Description from ''
import Directions  from ''



import React, {
   Component
} from 'react';

class MealName extends Component {
  constructor(){
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  render(){
    <input type="text" />
  }
}

class Description extends Component {

   constructor(){

     this.handleOnChange = this.handleOnChange.bind(this);
   }

   render() {
       return (
         <textarea placeholder="Description" />
       );
   }
}

class ImageUrl extends Component {
  constructor(){
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  render() {
    <input type="url" />
  }
}


class Ingredient extends Component {
  constructor(){
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  render() {
    <select>
      <option>empty</option>
    </select>
  }
}

class Directions extends Component {

   constructor(){

     this.handleOnChange = this.handleOnChange.bind(this);
   }

   render() {
       return (
         <textarea placeholder="Recipe directions" />
       );
   }
}

 export {
   MealName,
   Description,
   ImageUrl,
   Ingredient,
   Directions
 }
