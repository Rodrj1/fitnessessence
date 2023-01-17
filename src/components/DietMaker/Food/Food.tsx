interface Props {
  food: Food | FoodInDiet;
  CSS: CSSModuleClasses;
  handleCalories?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addToDiet?: (food: Food) => void;
}

const Food = ({ food, handleCalories, addToDiet, CSS }: Props) => {
  return (
    <article className={CSS.foodContainer} key={food.name}>
      <h2>{food.name}</h2>
      {(food as FoodInDiet).id == undefined && (
        <>
          <p>
            <span>
              Calories: {food.caloriesPerHundred}
              <br />
              Protein: {food.protein}g
              <br />
              Fats: {food.fats}g
              <br />
              Carbs: {food.carbs}g
            </span>
          </p>

          <p>How many grams?</p>
          <input onChange={handleCalories} />
          <br />
          {addToDiet && (
            <button onClick={() => addToDiet(food)}>ADD TO DIET</button>
          )}
        </>
      )}
      {(food as FoodInDiet).id != undefined && (
        <p>
          {(food as FoodInDiet).grams.toFixed(0)}g:{" "}
          <span>{food.caloriesPerHundred.toFixed(0)}cal</span>
        </p>
      )}
    </article>
  );
};

export default Food;
