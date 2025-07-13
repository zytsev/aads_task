import { useMediaQuery } from 'react-responsive';
import NavList from '../navList/NavList';
import style from './footer.module.css';

function Footer() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <footer className={style.footer}>
            <div className={style.nav}>
                <NavList className={isMobile ? style.colum : ''} />
            </div>
            <hr />
            <div className={`${style.term_block} ${isMobile && style.colum_term}`}>
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
