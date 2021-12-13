export type IngredientId = string;

type Unit = 'tsp' | 'tbsp' | 'unit';

export interface Ingredient {
  id: IngredientId;
  title: string;
  unit: Unit;
}
