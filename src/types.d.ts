interface Food {
  name: string;
  caloriesPerHundred: number;
  protein: number;
  carbs: number;
  fats: number;
  type: string;
}

interface FoodInDiet extends Food {
  grams: number;
  id: number;
}

interface Diet {
  meals: FoodInDiet[];
}
