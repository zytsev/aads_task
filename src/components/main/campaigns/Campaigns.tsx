import { useState } from 'react';
import { Dialog } from '../../dialog/Dialog';
import Button from '../../ui/button/Button';
import style from './campaigns.module.css';
import { TableFull } from '../table/TableFull';
import { useMobile } from '../../../hooks/useResponsive';
import { TableMobile } from '../table/TableMobile';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';

interface CampaignsProps {
    className?: string;
}
export const Campaigns = ({ className = '' }: CampaignsProps) => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const campaigns = useSelector((state: RootState) => state.campaigns.campaigns);

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
            {useMobile() ? <TableMobile data={campaigns} /> : <TableFull data={campaigns} />}
            <Dialog isOpenDialog={isOpenDialog} handleCloseDialog={handleCloseDialog} />
        </section>
    );
};
