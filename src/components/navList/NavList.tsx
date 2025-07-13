import style from './navList.module.css';
interface NavListProps {
    className?: string;
}
function NavList({ className }: NavListProps) {
    return (
        <ul className={`${style.navList} ${className}`}>
            <li>
                <a href='#'>Advertise</a>
            </li>
            <li>
                <a href='#'>Earn</a>
            </li>
            <li>
                <a href='#'>Marketplace</a>
            </li>
            <li>
                <a href='#'>Stats</a>
            </li>
        </ul>
    );
}

export default NavList;
