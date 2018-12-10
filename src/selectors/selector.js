// here we'll store functions that will return an arrays to us.
import { chickenKyiv } from "@groceristar/groceristar-fetch";

// function getRandomRecipe(){
//   return chickenKyiv.getRandomRecipe();
// }
//
// function getRecipe(){
//   return chickenKyiv.getRecipe();
// }
function getFirstFiveRecipes(){
  return chickenKyiv.getFirstFiveRecipes();
}

// export { getRandomRecipe, getRecipe }

export { getFirstFiveRecipes }
