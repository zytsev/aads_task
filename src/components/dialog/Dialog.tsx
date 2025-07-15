import { useEffect, useRef, useState } from 'react';
import { checkboxes } from '../../assets/data/checkboxes';
import Button from '../ui/button/Button';
import style from './dialog.module.css';
import { useDispatch } from 'react-redux';
import { addCampaign } from '../../store/campaignsSlice';

interface DialogProps {
    className?: string;
    isOpenDialog: boolean;
    handleCloseDialog: () => void;
}

export const Dialog = ({ className = '', isOpenDialog, handleCloseDialog }: DialogProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [Campaign, setCampaign] = useState('');
    const dispatch = useDispatch();

    const handleAction = () => {
        if (Campaign.trim().length) {
            dispatch(addCampaign({ Campaign }));
            setCampaign('');
            handleCloseDialog();
        }
    };

    const handleCancel = () => {
        setCampaign('');
        handleCloseDialog();
    };

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (isOpenDialog && !dialog.open) {
            dialog.showModal();
        } else if (!isOpenDialog && dialog.open) {
            dialog.close();
        }
    }, [isOpenDialog]);

    // exit key esc
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const handleClose = () => {
            handleCloseDialog();
        };
        dialog.addEventListener('close', handleClose);
        return () => dialog.removeEventListener('close', handleClose);
    }, [handleCloseDialog]);

    return (
        <dialog ref={dialogRef} className={`${style.dialog} ${className}`}>
            <div className={style.title}>
                <h2>Create New Campaign</h2>
                <Button title='⨉' action={handleCloseDialog} />
            </div>
            <form action='#' className={style.form}>
                <label htmlFor='campaign'>Campaign name</label>
                <input type='text' placeholder='Campaign name' name='campaign' id='campaign' value={Campaign} onChange={(e) => setCampaign(e.target.value)} />
                <p>Language</p>
                <input type='text' placeholder='Language' name='language' />
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
                    <Button title='Cancel' action={handleCancel} />
                    <Button title='Create campaign' accent={true} action={handleAction} />
                </div>
            </form>
        </dialog>
    );
};
