import { DishId } from '../dishes/models';
import { IngredientId } from '../ingredients/models';

export interface RecipeIngredient {
  id: IngredientId;
  quantity: number;
  unit: string;
  toasted: boolean;
}

export interface RecipeDish {
  id: DishId;
}

type RecipeId = string;

export interface Recipe {
  id: RecipeId;
  title: string;
  description: string;
  imageUri: string;
  countryCode: string; // country of origin
  dishes: RecipeDish[];
  ingredients: RecipeIngredient[];
}

export type Recipes = Record<RecipeId, Recipe>;
