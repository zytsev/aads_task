import style from './button.module.css';

interface ButtonProps {
    className?: string;
    title?: string;
    accent?: boolean;
    action?: () => void;
}
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ className = '', title, accent, action, children }) => {
    return (
        <button type='button' className={`${style.button} ${className} ${accent && style.button_accent}`} onClick={action}>
            {title}
            {children}
        </button>
    );
};
export default Button;
