import logo from "../../assets/logo.png";
import PresentationCSS from "./MainPresentation.module.scss";

const MainPresentation = () => {
  return (
    <section className={PresentationCSS.container}>
      <div>
        <h1>
          CHANGING YOUR HABITS WITH <span>FITNESS SIMPLICITY</span>
        </h1>
      </div>
      <div>
        <p>
          We know fitness can be confusing but it doesn't have to be. Fitness
          Simplicity aims to fix that for you.
        </p>
      </div>
      <div>
        <img src={logo} />
      </div>
    </section>
  );
};

export default MainPresentation;
