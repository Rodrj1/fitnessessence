import DietExplainerCSS from "./DietExplainer.module.scss";

const DietExplainer = () => {
  return (
    <section className={DietExplainerCSS.container}>
      <div>
        <h2>Calories</h2>
        <p>
          In order to do anything first you must get your daily intake of
          calories for which your weight stays the same. Any website would give
          you a calculator for this. Reminder: the values given are never exact,
          you will need to test afterwards. A scale is a HARD requirement for
          faster results. If you have to go somewhere you could walk around and
          maybe, someday, you will get there; but, a map will make your life
          easier no? Make sure to weigh yourself in the same conditions every
          week, or even daily.
        </p>
        <br />
        <p>
          For the sake of testing lets say you need 2500 calories to preserve
          your body weight. Five hundred more calories, caloric superavit, will
          add aproximately 0.5kgs to your body per week. Conversely, five
          hundred less, caloric deficit, will make you lose 0.5kgs per week. As
          I mentioned earlier, calculations are not exact, however, if you use a
          scale to weigh yourself you can track how your body reacts to the
          calories you are consuming weekly.
        </p>
        <br />
        <p>
          <br />
          <span>RECOMENDATIONS:</span> <br />
          <br />
          It is highly suggested that the first two weeks you start with a
          calory intake that would keep your current weight. <br />
          <br />
          Buy a scale.
          <br />
          <br />
          Sleep.
          <br />
          <br />
          Track your calories. This can be tedious at the beginning but
          eventually it will just become second nature. You can easily do this
          by looking at the nutritional information of every food. You can just
          google it.
          <br />
          <br />
          Obviously, the better the source of the calories the more healthier
          you will become. If you go this path you will also learn how to
          include foods that are labelled as unhealthy with almost no side
          effects. But why? Well, if you are looking to be an elite athlete then
          you will have to see it elsewhere as to see the variations, to
          understand macronutrients (daily amount of protein, carbs and fats for
          your weight) and micronutrients, cycles, interminent fasting, how to
          help your training and so on. But for the sake of keeping it simple
          for the people that do not wish to become a national athlete, eating
          healthier food with an established amount of calories has the largest
          impact on your body. Even over training.
          <br />
          <br />
          That's it. Once you learn how to track your body weight then the game
          holds no misteries. You may weigh up or down as you prefer.
        </p>
      </div>
      <div>
        <h2>"Diet"</h2>
        <p>
          This is rather easy once you learn how to track your body weight. Just
          pick food and count its calories. Keep it simple. Do not do
          interminent fasting or any fashionable fitness promise out there.
        </p>
        <br />
        <p>
          <br />
          <span>EXAMPLE:</span> <br />
          <br />
          An invented "diet" in which you have to eat 1500 calories (I would
          advise against eating such a low amount unless you know what you're
          doing, this for a quick example.) to lose some weight weekly. I will
          eat throughout the day:
          <br />
          <br />
          300grs of Chicken Breast: <span>495 calories</span>.
          <br />
          <br /> 160grs of pasta: <span>546 calories</span>.
          <br />
          <br />1 big banana (100grs): <span>90 calories</span>. <br />
          <br />
          100grs of oats: <span>379 calories</span>.
          <br />
          <br />1 tablespoon of peanut butter: <span>100 calories</span>.
          <br />
          <br />
          Total: <span>1610 calories</span> aprox.
          <br />
          <br />
          In each meal you should add vegetables as you like. You can also
          replace pasta with legumes (recommended). This amounts to 1610
          calories (again, this is never 100% exact). Though the diet suggests
          1500 calories per day, this value can vary up to 1700 and you will
          still see results, just slightly slower over time. If you want, you
          could also compensate a day with another. If you have to get to 1500
          calories, then you will consume 3000 calories in two days. You could
          eat, for example, 1300 calories a day and 1700 the other. This is
          specially useful if you also train. Do not sweat it if you feel like a
          day is not going as you planned with the calories. <br />
          <br />
          That's it. This is just an example over an invented "diet", as it is
          rather a lifestyle than a diet. Keep in mind: variety is key. The most
          varied your meals over the days, the more benefits you will get.
        </p>
      </div>
    </section>
  );
};

export default DietExplainer;
