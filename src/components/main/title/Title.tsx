import { useMobile } from '../../../hooks/useResponsive';
import style from './title.module.css';

interface TitleProps {
    className?: string;
}
export const Title = ({ className = '' }: TitleProps) => {
    return (
        <section className={`${style.title} ${className} ${useMobile() && style.colum}`}>
            <div className={style.title_block}>
                <h1>The first crypto & bitcoin advertising network in the market</h1>
                <p>Skyrocket your publisher earnings with our game-changing traffic monetization solution</p>
            </div>
            <ul className={`${style.cards} ${useMobile() && style.colum}`}>
                <li className={style.card}>
                    <h5 className={style.card_title}>Impressions/day</h5>
                    <div className={`${style.card_data} ${useMobile() && style.card_mob}`}>
                        <span className={style.card_value}>{229} M</span>
                        <span className={style.card_arrow_up}>↑</span>
                        <span className={style.card_percent}>{1.78}%</span>
                    </div>
                    <p className={style.card_description}>{8.3}M unique IPs</p>
                </li>
                <li className={style.card}>
                    <h5 className={style.card_title}>Active ad units</h5>
                    <div className={`${style.card_data} ${useMobile() && style.card_mob}`}>
                        <span className={style.card_value}>{8796} K</span>
                        <span className={style.card_arrow_down}>↓</span>
                        <span className={style.card_percent}>{1.78}%</span>
                    </div>
                    <p className={style.card_description}>over {6}K publishers</p>
                </li>
                <li className={style.card}>
                    <h5 className={style.card_title}>Publishers earn/month</h5>
                    <div className={`${style.card_data} ${useMobile() && style.card_mob}`}>
                        <span className={style.card_value}>${1000}</span>
                        <span className={style.card_arrow_up}>↑</span>
                        <span className={style.card_percent}>{3.17}%</span>
                    </div>
                    <p className={style.card_description}>from {408} ad campaigns</p>
                </li>
            </ul>
        </section>
    );
};
