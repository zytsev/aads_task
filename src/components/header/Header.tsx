import NavList from '../navList/NavList';
import style from './header.module.css';
import { useMediaQuery } from 'react-responsive';

function Header() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <a href='/'>{isMobile ? <img src='/Short.png' alt='logoMobile'></img> : <img src='/Union.png' alt='logo'></img>}</a>
                {isMobile ? <img src='/Burger.png' alt='nav' /> : <NavList />}
            </nav>
        </header>
    );
}

export default Header;
