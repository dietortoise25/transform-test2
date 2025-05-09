import { Card, CardContent } from "@/components/ui/card";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Card3D() {
    return (
        <div className="w-full h-screen relative">
            <div className="relative transform-3d top-1/3 left-1/4">
                {
                    cards.map((item, index) => (
                        <Card
                            key={index}
                            className="w-100 h-100
                                   absolute top-2/3
                                   transform-3d
                                   hover:-translate-y-[40%]
                                   transition-transform duration-300 ease-in-out
                                   rounded-3xl border-4 border-slate-900
                                   shadow-xl shadow-slate-900/50"
                            style={{
                                transform: `rotateX(-10deg) rotateY(-30deg) translate3d(0, 0, ${(index) * -(1000 / cards.length)}px)`,
                                backgroundColor: `hsl(${index * 30}, 60%, 40%)`,


                            }}>
                            <CardContent
                                className="text-8xl text-black/70 font-semibold 
                                         w-full h-full flex justify-end items-start"
                            >
                                {item}
                            </CardContent>
                        </Card>
                    ))
                }
            </div></div>
    );
}
export default Card3D;
