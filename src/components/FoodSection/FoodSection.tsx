import DietCSS from "./FoodSection.module.scss";

interface Props {
  foodElements: JSX.Element[];
}

const FoodSection = ({ foodElements }: Props) => {
  return (
    <section className={DietCSS.container}>
      <h2>
        LEARN ABOUT<span>CALORIES</span>
      </h2>
      <h2>
        LEARN ABOUT<span>DIET</span>
      </h2>
      {foodElements}
    </section>
  );
};

export default FoodSection;
