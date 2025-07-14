import style from './button.module.css';

interface ButtonProps {
    className?: string;
    title: string;
    accent?: boolean;
    action?: () => void;
}
export const Button = ({ className = '', title, accent, action }: ButtonProps) => {
    return (
        <button type='button' className={`${style.button} ${className} ${accent && style.button_accent}`} onClick={action}>
            {title}
        </button>
    );
};
