import { useMobile } from '../../hooks/useResponsive';
import NavList from '../navList/NavList';
import style from './footer.module.css';

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.nav}>
                <NavList className={useMobile() ? style.colum : ''} />
            </div>
            <hr />
            <div className={`${style.term_block} ${useMobile() && style.colum_term}`}>
                <span>© A-ADS 2011-2025</span>
                <ul>
                    <li>
                        <a href='#'>Terms of Service</a>
                    </li>
                    <li>
                        <a href='#'>Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
