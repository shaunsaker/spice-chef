const fs = require('fs');
const path = require('path');
const prompts = require('prompts');
import { Recipe, Recipes } from '../src/recipes/models';

const RECIPES_PATH = '../src/data/recipes.json';

const createNewRecipe = async (): Promise<Recipe> => {
  const recipe: Recipe = {
    id: '',
    title: '',
    description: '',
    countryCode: '',
    imageUri: '',
    dishes: [],
    ingredients: [],
  };

  const response = await prompts([
    {
      type: 'text',
      name: 'title',
      message: 'What is the recipe title?',
    },
    {
      type: 'text',
      name: 'description',
      message: 'What is the recipe description?',
    },
    {
      type: 'text',
      name: 'countryCode',
      message: 'What is the recipe country code?',
    },
    {
      type: 'text',
      name: 'imageUri',
      message: 'What is the recipe imageUri?',
    },
    {
      type: 'list',
      name: 'dishes',
      message: 'Please enter a list of dishes separated by a comma (,):',
      separator: ',',
    },
    {
      type: 'list',
      name: 'ingredients',
      message:
        'Please enter a list of ingredients, in the format: QUANTITY UNIT NAME* (where * indicates if it is TOASTED) (e.g. 1 tbsp Coriander Seeds*), separated by a comma (,):',
      separator: ',',
    },
  ]);

  // map the response to the recipe
  recipe.id = response.title;
  recipe.title = response.title;
  recipe.description = response.description;
  recipe.countryCode = response.countryCode;
  recipe.imageUri = response.imageUri;

  recipe.dishes = response.dishes.map(string => ({ id: string }));

  recipe.ingredients = response.ingredients.map(string => {
    const quantity = string.split(' ')[0];
    const quantityNumber = parseFloat(quantity);
    const unit = string.split(' ')[1];
    const name = string
      .split(`${quantity} ${unit} `)[1]
      .replace('*', '')
      .replace('!', '');
    const toasted = string.includes('*');
    const ground = string.includes('!');

    return {
      id: name,
      quantity: quantityNumber,
      unit,
      toasted,
      ground,
    };
  });

  return recipe;
};

const createRecipes = async () => {
  const existingRecipes: Recipes = require(RECIPES_PATH);

  const newRecipe = await createNewRecipe();

  existingRecipes[newRecipe.id] = newRecipe;

  fs.writeFileSync(
    path.join(__dirname, RECIPES_PATH),
    JSON.stringify(existingRecipes, undefined, 2),
  );

  const response = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Would you like to create another recipe?',
    initial: true,
  });

  const shouldCreateAnotherRecipe = response.value;

  if (shouldCreateAnotherRecipe) {
    await createRecipes();
  }
};

// prompts the user to create a recipe
(async () => {
  await createRecipes();
})();
