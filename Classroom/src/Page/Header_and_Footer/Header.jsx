import style from './Header.module.scss';
import logo_kelas from '../../assets/Image/Header_and_Footer/logo_kelas.png';
import nama_kelas from '../../assets/Image/Header_and_Footer/nama_kelas.png';

function header () {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img className={style.logokelas} src={logo_kelas} alt='logo_kelas'/>
                <img className={style.namakelas} src={nama_kelas} alt='nama_kelas'/>
            </div>
            <div className={style.space}></div>
            <div className={style.menu}>
                <ul className={style.list}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Academics</li>
                    <li>Admissions</li>
                    <li>Student Life</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    ) 
}

export default header;