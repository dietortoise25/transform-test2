import { useState } from 'react';
import styles from './styles/Card3D.module.css';
import { Card, CardContent } from "@/components/ui/card";



function Card3D() {
    const [cardsNumber, setCardsNumber] = useState(6);
    const cards = Array.from({ length: cardsNumber }, (_, index) => index + 1);
    return (
        <div className="w-full h-screen flex flex-col items-center overflow-hidden">
            <div className='w-full h-[64px] flex justify-center items-center text-2xl'>
                <label htmlFor="">Number of cards: </label>
                <input type="number" className='border-2 border-black rounded-2xl text-center ml-5 px-4 py-2' id="" value={cardsNumber} onChange={(e) => setCardsNumber(Number(e.target.value))} />
            </div>

            <div className="transform-3d -translate-x-[250px] translate-y-[500px]">
                {cards.map((item, index) => (
                    <Card
                        key={index}
                        className={styles.cardItem}
                        style={{
                            '--z-translate': `${index * -(1200 / cards.length)}px`,
                            background: `hsl(${360 / cards.length * index}, 60%, 40%)`
                        } as React.CSSProperties}>
                        <CardContent className="w-full h-full flex flex-col justify-between ">
                            <div className='text-7xl self-end'>{item}</div>
                            <div className='text-3xl text-white/50 self-end'>Hover Me</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Card3D;
