import { Button, DropdownMenu } from '@radix-ui/themes';
import CustomBtn from '../../ui/button/Button';
import style from './table.module.css';
import { deleteCampaign, type CampaignState } from '../../../store/campaignsSlice';
import { useDispatch } from 'react-redux';

interface Props {
    data: CampaignState[];
}
export const TableMobile = ({ data }: Props) => {
    const dispatch = useDispatch();
    return (
        <div className={style.containerTmobile}>
            {data.map((el) => (
                <div className={style.table} key={el.id}>
                    <div className={style.t_left}>
                        <span className={style.accent}>{el.Campaign}</span>
                        <span
                            className={`${style.status} ${
                                el.Status === 'Active' ? style.status_green : el.Status === 'Warning' ? style.status_red : style.status_brown
                            }`}
                        >
                            {el.Status || 'Paused'}
                        </span>
                    </div>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant='ghost'>
                                <DropdownMenu.TriggerIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content align='end' alignOffset={100}>
                            <DropdownMenu.Item shortcut={el.Payment_model}>Payment model</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut={el.Spendings}>Spendings</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut={el.Impressions}>Impressions</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut={el.Clicks}>Clicks</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut={el.CTR}>CTR</DropdownMenu.Item>
                            <DropdownMenu.Item className={style.menuItem}>
                                <CustomBtn className={style.btnPage}>Go to Campaign Page</CustomBtn>
                                <CustomBtn className={style.btn} action={() => dispatch(deleteCampaign({ id: el.id }))}>
                                    <img src='/Vector.png' alt='basket' />
                                </CustomBtn>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
            ))}
        </div>
    );
};
