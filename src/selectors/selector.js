// here we'll store functions that will return an arrays to us.
import { chickenKyiv } from "@groceristar/groceristar-fetch";

function getRandomRecipe(){
  return chickenKyiv.getRandomRecipe();
}

function getRecipe(){
  return chickenKyiv.getRecipe();
}


export { getRandomRecipe, getRecipe }
