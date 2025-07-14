import { useEffect, useRef } from 'react';
import { checkboxes } from '../../assets/data/checkboxes';
import { Button } from '../ui/button/Button';
import style from './dialog.module.css';

interface DialogProps {
    className?: string;
    isOpen: boolean;
    handleClose: () => void;
}

export const Dialog = ({ className = '', isOpen, handleClose }: DialogProps) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [isOpen]);
    return (
        <dialog ref={dialogRef} className={`${style.dialog} ${className}`}>
            <div className={style.title}>
                <h2>Create New Campaign</h2>
                <Button title='⨉' action={handleClose} />
            </div>
            <form action='#' className={style.form}>
                <label htmlFor='campaign'>Campaign name</label>
                <input type='text' placeholder='Campaign name' name='campaign' id='campaign' />
                <p>Language</p>
                <input type='text' placeholder='Choose language' name='language' />
                <p>Ratings</p>
                <div className={style.checkboxes}>
                    {checkboxes.map((el) => (
                        <div className={style.checkbox} key={el.id}>
                            <input type='checkbox' id={el.name} defaultChecked={el.checked} />
                            <label htmlFor={el.name}>{el.name}</label>
                        </div>
                    ))}
                </div>
                <div className={style.buttons}>
                    <Button title='Cancel' />
                    <Button title='Create campaign' accent={true} />
                </div>
            </form>
        </dialog>
    );
};
