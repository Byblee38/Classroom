import style from './Header.module.scss';
import logo_kelas from '../../assets/Image/Header_and_Footer/logo_kelas.png';
import nama_kelas from '../../assets/Image/Header_and_Footer/nama_kelas.png';
import {useState} from 'react';
import {Bars3Icon} from '@heroicons/react/24/outline';
import {Drawer} from '@mui/material';
import {useEffect} from 'react';

function Header () {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen((pervState) => !pervState);
    useEffect(() => {
        alert('Web nya masih dalam taham pengembangan, harap bersabar!');
    }, []);

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img className={style.logokelas} src={logo_kelas} alt='logo_kelas'/>
                <img className={style.namakelas} src={nama_kelas} alt='nama_kelas'/>
            </div>
            <div className={style.space}></div>
            <div className={style.menu}>
                <ul className={style.list}>
                    <li className={style.listH}>Home</li>
                    <li className={style.listH}>About Us</li>
                    <li className={style.listH}>Academics</li>
                    <li className={style.listH}>Admissions</li>
                    <li className={style.listH}>Student Life</li>
                    <li className={style.listH}>Contact</li>
                </ul>
            </div>
            <div className={style.drawer}>
                <Bars3Icon className={style.icon} onClick={handleClick}/>
                <Drawer
                anchor="right"
                open={isOpen}
                onClose={handleClick}
                >
                    <ul style={{listStyle: 'none', padding: '1rem', fontFamily: 'Outfit', cursor: 'pointer', fontSize: '14px', backgroundColor: '#f0f5ff', width: '100px', marginTop: '0px', height: '100vh', marginBottom: '0px'}}>
                        <li style={{marginBottom: '10px'}}>Home</li>
                        <li style={{marginBottom: '10px'}}>About Us</li>
                        <li style={{marginBottom: '10px'}}>Academic</li>
                        <li style={{marginBottom: '10px'}}>Admissions</li>
                        <li style={{marginBottom: '10px'}}>Student Life</li>
                        <li style={{marginBottom: '10px'}}>Contact</li>
                    </ul>
                </Drawer>
            </div>
        </header>
    ) 
}

export default Header;