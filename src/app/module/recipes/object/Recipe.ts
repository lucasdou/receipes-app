export interface Recipe {
  id?: number;
  name: string;
  description: string;
  ingredients: Array<string>;
  instructions: string;
  
}