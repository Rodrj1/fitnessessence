import { useEffect, useState } from "react";
import { resetInputs } from "./resetInputs";

export const useDietMaker = () => {
  const [diet, setDiet] = useState<Diet>({
    meals: [],
  });
  const [dietNutritionalInfo, setDietNutritionalInfo] = useState({
    calories: 0,
    proteins: 0,
    fats: 0,
    carbs: 0,
  });
  const [isDietMakerOpen, setIsDietMakerOpen] = useState(false);
  const [inputGrams, setInputGrams] = useState(0);

  useEffect(() => {
    const checkExistingDiet = window.localStorage.getItem("diet");
    if (checkExistingDiet) {
      setDiet({ meals: JSON.parse(checkExistingDiet) });
      const getDietInfo = window.localStorage.getItem("dietInfo");
      if (getDietInfo) {
        setDietNutritionalInfo(JSON.parse(getDietInfo));
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("diet", JSON.stringify(diet.meals));
  }, [diet.meals]);

  useEffect(() => {
    window.localStorage.setItem(
      "dietInfo",
      JSON.stringify(dietNutritionalInfo)
    );
  }, [dietNutritionalInfo]);

  const handleDietMakerVisibility = () => {
    setIsDietMakerOpen((current) => !current);
  };

  const addToDiet = (food: Food) => {
    if (inputGrams > 0) {
      resetInputs();
      const randomId = Math.random() * (1000000 - 1) + 1;
      const getInputGramsCalories =
        (food.caloriesPerHundred / 100) * inputGrams;
      const getInputGramsProteins = (food.protein / 100) * inputGrams;
      const getInputGramsFats = (food.fats / 100) * inputGrams;
      const getInputGramsCarbs = (food.carbs / 100) * inputGrams;
      setDietNutritionalInfo({
        calories: dietNutritionalInfo.calories + getInputGramsCalories,
        proteins: dietNutritionalInfo.proteins + getInputGramsProteins,
        fats: dietNutritionalInfo.fats + getInputGramsFats,
        carbs: dietNutritionalInfo.carbs + getInputGramsCarbs,
      });
      setDiet({
        meals: diet.meals.concat({
          ...food,
          id: randomId,
          grams: inputGrams,
          caloriesPerHundred: getInputGramsCalories,
          protein: getInputGramsProteins,
          fats: getInputGramsFats,
          carbs: getInputGramsCarbs,
        }),
      });
      setInputGrams(0);
    }
  };

  const handleInputCalories = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputGrams(parseInt(e.target.value));
  };

  const handleRemoveFood = (foodId: number) => {
    const foodFromDiet = diet.meals.find((food) => food.id === foodId);
    if (foodFromDiet) {
      const getRemovedCalories = foodFromDiet.caloriesPerHundred;
      const getRemovedProtein = foodFromDiet.protein;
      const getRemovedFats = foodFromDiet.fats;
      const getRemovedCarbs = foodFromDiet.carbs;
      setDietNutritionalInfo({
        calories: dietNutritionalInfo.calories - getRemovedCalories,
        proteins: dietNutritionalInfo.proteins - getRemovedProtein,
        fats: dietNutritionalInfo.fats - getRemovedFats,
        carbs: dietNutritionalInfo.carbs - getRemovedCarbs,
      });
      const updateDiet = diet.meals.filter(
        (meals) => meals.id != foodFromDiet.id
      );
      setDiet({ meals: updateDiet });
    }
  };
  return {
    diet,
    dietNutritionalInfo,
    isDietMakerOpen,
    addToDiet,
    handleDietMakerVisibility,
    handleInputCalories,
    handleRemoveFood,
  };
};
