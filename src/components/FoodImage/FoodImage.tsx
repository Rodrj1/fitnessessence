interface Props {
    image: string;
}

const FoodImage = ({ image }: Props) => {
  return <img src={image} className="servingFood" />;
};

export default FoodImage;
