import style from "./Benefit.module.scss";
import { Benefitcard } from "./Benefit_card.js";

function Benefit() {
  return (
    <div className={style.benefit}>
      <div className={style.text}>
        <div className={style.chip}>
          <h1 className={style.textchip}>Children Deserve Bright Future</h1>
        </div>
        <h1 className={style.header}>Our Benefits</h1>
        <p style={{ textAlign: "center" }}>
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child future.
        </p>
      </div>
      <div className={style.card}>
      {Benefitcard.list.map((item) => (
        <div className={style.benecard} key={item.id}>
          <div className={style.beneicon}><img className={style.logoicon} src={item.icon} alt="icon" /></div>
          <div className={style.information}>
            <h1 className={style.texttitle}>{item.title}</h1>
            <p className={style.textparagraf}>{item.paragraph}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Benefit;
