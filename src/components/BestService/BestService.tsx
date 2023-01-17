import japwoman from "../../assets/japwoman.png";
import BestServiceCSS from "./BestService.module.scss";

const BestService = () => {
  return (
    <section className={BestServiceCSS.serviceContainer}>
      <div className={BestServiceCSS.serviceImage}>
        <img src={japwoman} />
      </div>
      <div className={BestServiceCSS.serviceInfo}>
        <h2>WHATS THE SERVICE?</h2>
        <p>Change your health habits permantently and simple!</p>
      </div>
      <div className={BestServiceCSS.serviceInfo}>
        <h2>Why?</h2>
        <p>
          Just this page is enough for you to attempt to understand your body
          and get results.
        </p>
      </div>
      <div className={BestServiceCSS.serviceInfo}>
        <h2>Strategies</h2>
        <p>
          There are many strategies to either win or lose weight. From
          lowering/upping training intensity to simply reducing/increasing
          calories intake. Among many others. However, this guide will show what
          has actually the largest impact on your body and life. A base.
        </p>
      </div>
      <div className={BestServiceCSS.serviceInfo}>
        <h2>Ensured results</h2>
        <p>
          Results vary depending on your initial body base. Wheter it's two
          months or a year, results are all but guaranteed. But more importantly
          than results is the permanent knowledge that will allow you to have a
          healthy body for as long as you wish it to be. They come best when you
          don't lie to what you're doing! No need to rush anything.
        </p>
      </div>
      <div className={BestServiceCSS.serviceInfo}>
        <h2>What is this base?</h2>
        <p>
          The base of everything in which all the other strategies are built
          upon. This is more than enough for about everyone who does not wish to
          become an elite athlete. It is merely adjusting your diet, knowing
          what you eat and setting a goal. It will become second nature!
        </p>
      </div>
    </section>
  );
};

export default BestService;
