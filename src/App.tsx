import reactLogo from "./assets/react.svg";
import meatimg from "./assets/food/meat.png";
import vegservingimg from "./assets/food/vegserving.png";
import dietimg from "./assets/food/diet.png";
import StarContainer from "./components/StarRating/StarContainer";
import BestService from "./components/BestService/BestService";
import MainPresentation from "./components/MainPresentation/MainPresentation";
import FoodSection from "./components/FoodSection/FoodSection";
import FoodImage from "./components/FoodImage/FoodImage";
import "./App.scss";
import DietMaker from "./components/DietMaker/DietMaker";
import DietExplainer from "./components/DietExplainer/DietExplainer";

function App() {
  return (
    <>
      <MainPresentation />
      <BestService />
      <FoodSection
        foodElements={[
          <FoodImage image={meatimg} key={2} />,
          <FoodImage image={vegservingimg} key={3} />,
          <FoodImage image={dietimg} key={1} />,
        ]}
      />
      <DietExplainer />
      <DietMaker />
      <StarContainer />
    </>
  );
}

export default App;
