import { Table } from '@radix-ui/themes';
import style from './tableData.module.css';
import Button from '../../ui/button/Button';
import data from '../../../assets/data/campaigns.json';
// interface TableProps {
//     className?: string;
// }
export const TableData = () => {
    return (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Campaign ▼</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status ▼</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Payment model ▼</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Spendings ? ▼</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Impressions ? ▼</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Clicks ? ▼</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>CTR ? ▼</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {data.map((el) => (
                    <Table.Row key={el.id}>
                        <Table.RowHeaderCell className={style.accent}>{el.Campaign}</Table.RowHeaderCell>
                        <Table.Cell>
                            <span
                                className={`${style.status} ${
                                    el.Status === 'Active' ? style.status_green : el.Status === 'Warning' ? style.status_red : style.status_brown
                                }`}
                            >
                                {el.Status}
                            </span>
                        </Table.Cell>
                        <Table.Cell>
                            SPD: <span className={style.accent}>{el.Payment_model}</span>
                        </Table.Cell>
                        <Table.Cell>{el.Spendings}</Table.Cell>
                        <Table.Cell>{el.Impressions}</Table.Cell>
                        <Table.Cell>{el.Clicks}</Table.Cell>
                        <Table.Cell>{el.CTR}</Table.Cell>
                        <Table.Cell>
                            <Button className={style.btn}>
                                <img src='/Vector.png' alt='basket' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};
