import { useMobile } from '../../hooks/useResponsive';
import NavList from '../navList/NavList';
import style from './header.module.css';

function Header() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <a href='/'>{useMobile() ? <img src='/Short.png' alt='logoMobile'></img> : <img src='/Union.png' alt='logo'></img>}</a>
                {useMobile() ? <img src='/Burger.png' alt='nav' /> : <NavList />}
            </nav>
        </header>
    );
}

export default Header;
