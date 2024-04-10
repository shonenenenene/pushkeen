import { useState } from 'react';
import './Card.scss';

export interface CardProps {
    id?: number;
    title: string;
    body: string;
}

const Card = ({ title, body }: CardProps) => {
    const [selected, setSelected] = useState(false);

    return (
        <li onClick={() => setSelected(!selected)} className={`cards__item ${selected ? 'selected' : ''}`}>
            <h3 className='cards__title'>{title}</h3>
            <p className='cards__paragraph'>
                {body} {body} {body}.
            </p>
        </li>
    );
};

export default Card;
