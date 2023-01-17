interface Food {
  name: string;
  caloriesPerHundred: number;
  protein: number;
  carbs: number;
  fats: number;
}

interface FoodInDiet extends Food {
  grams: number;
  id: number;
}

interface Diet {
  meals: FoodInDiet[];
}
