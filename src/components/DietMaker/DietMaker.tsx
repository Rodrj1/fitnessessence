import { foodData } from "../../data/foodData";
import { useDietMaker } from "../../features/DietMaker/useDietMaker";
import Food from "./Food/Food";
import DietCSS from "./DietMaker.module.scss";
import { useEffect, useState } from "react";

const DietMaker = () => {
  const {
    diet,
    dietNutritionalInfo,
    isDietMakerOpen,
    addToDiet,
    handleDietMakerVisibility,
    handleInputCalories,
    handleRemoveFood,
  } = useDietMaker();

  const [filteredFood, setFilteredFood] = useState<Food[]>([]);

  useEffect(() => {
    const filteredArr = foodData.reduce((acc: Food["type"][], current) => {
      const x = acc.find((item) => item === current.type);
      if (!x) {
        return acc.concat([current.type]);
      } else {
        return acc;
      }
    }, []);
  }, []);

  const handleFoodFilter = (type: string) => {
    setFilteredFood(foodData.filter((food) => food.type == type));
  };

  return (
    <section className={DietCSS.container}>
      <article>
        <table>
          <thead>
            <tr>
              <th>YOUR DIET</th>
            </tr>
            <tr>
              <th>Food</th>
              <th>Grams</th>
              <th>Proteins</th>
              <th>Fats</th>
              <th>Carbs</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {diet?.meals?.map((food) => (
              <tr key={food.id}>
                <td>{food.name}</td>
                <td>{food.grams.toFixed(0)}g</td>
                <td>{food.protein.toFixed(0)}g</td>
                <td>{food.fats.toFixed(0)}g</td>
                <td>{food.carbs.toFixed(0)}g</td>
                <td>
                  <span>{food.caloriesPerHundred.toFixed(0)}</span>
                </td>
                <td>
                  <button onClick={() => handleRemoveFood(food.id)}>
                    REMOVE
                  </button>
                </td>
              </tr>
            ))}
            {diet.meals.length > 0 && (
              <>
                <tr>
                  <th>Total</th>
                  <th></th>
                  <th>Proteins</th>
                  <th>Fats</th>
                  <th>Carbs</th>
                  <th>Calories</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>{dietNutritionalInfo.proteins.toFixed(0)}g</td>
                  <td>{dietNutritionalInfo.fats.toFixed(0)}g</td>
                  <td>{dietNutritionalInfo.carbs.toFixed(0)}g</td>
                  <td>
                    <span>{dietNutritionalInfo.calories.toFixed(0)}</span>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </article>

      <button onClick={handleDietMakerVisibility}>OPEN DIET MAKER</button>

      <article>
        {isDietMakerOpen && (
          <>
            <h2>FOOD AVAILABLE</h2>

            <button className={DietCSS.dropdown}>FILTER BY:
              <article className={DietCSS.dropdownContent}>
                {foodData
                  .reduce((acc: Food["type"][], current) => {
                    const x = acc.find((item) => item === current.type);
                    if (!x) {
                      return acc.concat([current.type]);
                    } else {
                      return acc;
                    }
                  }, [])
                  .map((category) => (
                    <div
                      key={category}
                      onClick={() => handleFoodFilter(category)}
                    >
                      {category}
                    </div>
                  ))}
              </article>
            </button>

            <h3>All values are based on a portion of 100grs.</h3>

            <div className={DietCSS.placeholderFoodContainer}>
              {filteredFood.map((food) => (
                <Food
                  key={food.name}
                  food={food}
                  CSS={DietCSS}
                  handleCalories={handleInputCalories}
                  addToDiet={addToDiet}
                />
              ))}
            </div>
          </>
        )}
      </article>
    </section>
  );
};

export default DietMaker;
