import styles from './styles/Card3D.module.css';
import { Card, CardContent } from "@/components/ui/card";
const cards = Array.from({ length: 10 }, (_, i) => i + 1);

function Card3D() {
    return (
        <div className="w-full h-screen grid place-items-center overflow-hidden">
            <div className="transform-3d -translate-x-[250px]">
                {cards.map((item, index) => (
                    <Card
                        key={index}
                        className={styles.cardItem}
                        style={{
                            '--z-translate': `${index * -(1200 / cards.length)}px`,
                            background: `hsl(${index * 30}, 60%, 40%)`
                        } as React.CSSProperties}>
                        <CardContent className="w-full h-full flex justify-end items-start text-7xl">
                            {item}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Card3D;
