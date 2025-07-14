import { useState } from 'react';
import { Dialog } from '../../dialog/Dialog';
import { Button } from '../../ui/button/Button';
import style from './campaigns.module.css';

interface CampaignsProps {
    className?: string;
}
export const Campaigns = ({ className = '' }: CampaignsProps) => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const handleOpenDialog = () => {
        setIsOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setIsOpenDialog(false);
    };
    return (
        <section className={`${style.campaigns} ${className}`}>
            <div className={style.title}>
                <h3>Campaigns</h3>
                <Button title='+ Create New Campaign' className={style.create_btn} action={handleOpenDialog} />
            </div>
            <Dialog isOpen={isOpenDialog} handleClose={handleCloseDialog} />
        </section>
    );
};
