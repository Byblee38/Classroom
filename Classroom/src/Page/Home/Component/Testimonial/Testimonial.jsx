import style from "./Testimonial.module.scss"
import {Testimonial_card} from "./Testimonial_card.js";

function Testimonial() {
    return (
        <div className={style.testimonial}>
            <div className={style.text}>
                <div className={style.chip}>
                    <h1 className={style.textchip}>Their Happy World</h1>
                </div>
                <div className={style.header}>
                <h1 className={style.textheader}>Our Testimonial</h1>
                <p className={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div className={style.card}>
                {Testimonial_card.list.map((item) => (
                    <div className={style.testimonialcard} key={item.id}>
                        <div className={style.testimonialprofile}><img className={style.profile} src={item.Profile} alt="profile"/></div>
                        <div className={style.testimonialinformation}>
                            <h1 className={style.texttitle}>{item.Name}</h1>
                            <p className={style.textparagraf}>{item.Comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial