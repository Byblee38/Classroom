import style from "./Hero.module.scss";
import hero_image from "../../../../assets/Image/Hero/image_hero.png";

function Hero() {
  return (
    <div className={style.hero}>
      <img src={hero_image} alt="Foto_Kelas" className={style.image} />
      <div className={style.hero_text}>
        <p className={style.welcome}>Welcome to Little Learners Academy</p>
        <h1 className={style.headingtext}>
          Where Young Minds Blossom <br /> and <span style={{ color: "#4d59ff", fontSize: "40px"}}>Dreams Take Flight</span>
        </h1>
        <p className={style.paragraph}>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <div className={style.rentangles}>
          <div className={style.information}>
            <h1 className={style.number}>+7000</h1>
            <p className={style.textnumber}>Students Passed Out</p>
            </div>
          <div className={style.information}>
            <h1 className={style.number}>+37</h1>
            <p className={style.textnumber}>Awards & Recognitions</p>
          </div>
          <div className={style.information}>
            <h1 className={style.number}>+13</h1>
            <p className={style.textnumber}>Experience Educators</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
