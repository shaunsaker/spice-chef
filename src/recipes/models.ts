import { DishId } from '../dishes/models';
import { IngredientId } from '../ingredients/models';

export interface RecipeIngredient {
  id: IngredientId;
  quantity: number;
  toasted: boolean;
}

export interface RecipeDish {
  id: DishId;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUri: string;
  countryCode: string; // country of origin
  dishes: RecipeDish[];
  ingredients: RecipeIngredient[];
}
