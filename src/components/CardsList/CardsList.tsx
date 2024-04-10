import { useEffect, useState } from 'react';
import Card, { CardProps } from '../Card/Card';
import './CardsList.scss';

const CardsList = () => {
    const [cardsData, setCardsData] = useState<CardProps[] | null>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    async function fetchRequest() {
        setStatus('loading');
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const dataJ = await data.json();
        setCardsData(dataJ.slice(0, 12));
        setStatus('success');
    }

    useEffect(() => {
        fetchRequest();
    }, []);

    return (
        <>
            {status === 'loading' ? (
                <div>loading...</div>
            ) : status === 'success' ? (
                <ul className='app__cards-list'>{cardsData && cardsData.map((e) => <Card key={e.id} title={e.title} body={e.body} />)}</ul>
            ) : (
                <div>oops, something went wrong...</div>
            )}
        </>
    );
};

export default CardsList;
