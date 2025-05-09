import { useState } from "react";

function Cube() {
    const [rotateX, setRotateX] = useState<number>(0)
    const [rotateY, setRotateY] = useState<number>(0)
    const [rotateZ, setRotateZ] = useState<number>(0)


    return (
        <div className="w-full h-screen flex gap-100 justify-center items-center bg-slate-100">
            {/* 旋转 */}
            <div>
                <div className="flex flex-col">
                    <label htmlFor="rotateX">rotateX</label>
                    <input id="rotateX" type="range" min="0" max="360" step="1" className="border-2 border-black w-64"
                        value={rotateX} onChange={(e) => setRotateX(Number(e.target.value))} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="rotateY">rotateY</label>
                    <input id="rotateY" type="range" min="0" max="360" step="1" className="border-2 border-black w-64"
                        value={rotateY} onChange={(e) => setRotateY(Number(e.target.value))} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="rotateZ">rotateZ</label>
                    <input id="rotateZ" type="range" min="0" max="360" step="1" className="border-2 border-black w-64"
                        value={rotateZ} onChange={(e) => setRotateZ(Number(e.target.value))} />
                </div>
            </div>
            {/* 立方体 */}
            <div className="w-[200px] h-[200px] ">
                <div
                    className="w-full h-full relative transform-3d"
                    style={{
                        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
                    }}
                >
                    {/* 前脸 */}
                    <div className="bg-red-400/95 absolute flex justify-center items-center text-3xl font-bold w-full h-full 
                    transform translate-z-[100px] rotate-y-0 ">
                        前
                    </div>

                    {/* 后脸 */}
                    <div className="bg-orange-400/95 absolute flex justify-center items-center text-3xl font-bold w-full h-full 
                    transform translate-z-[-100px] rotate-y-180 ">
                        后
                    </div>

                    {/* 左脸 */}
                    <div className="bg-yellow-400/95 absolute flex justify-center items-center text-3xl font-bold w-full h-full 
                    transform translate-x-[-100px] rotate-y-270 ">
                        左
                    </div>

                    {/* 右脸 */}
                    <div className="bg-green-400/95 absolute flex justify-center items-center text-3xl font-bold w-full h-full 
                    transform translate-x-[100px] rotate-y-90 ">
                        右
                    </div>

                    {/* 上脸 */}
                    <div className="bg-blue-400/95 absolute flex justify-center items-center text-3xl font-bold w-full h-full 
                    transform translate-y-[-100px] rotate-x-90 ">
                        上
                    </div>

                    {/* 下脸 */}
                    <div className="bg-purple-400/95 absolute flex justify-center items-center text-3xl font-bold w-full h-full 
                    transform translate-y-[100px] rotate-x-[-90deg] ">
                        下
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cube;
