import { Card, CardContent } from "@/components/ui/card";

function Transition() {
    return (
        <div className="container mx-auto flex gap-5 justify-evenly flex-wrap items-center h-screen perspective-[2000px]">
            <Card className=" bg-amber-400 w-100 h-100
      hover:translate-x-50
      rounded-3xl border-4 border-amber-900
      shadow-xl shadow-amber-900/50
      
      " >
                <CardContent
                    className=" text-3xl text-amber-900 font-semibold 
          w-full h-full flex justify-center items-center
          "
                >
                    NO TRANSITION
                    hover:translate-x-20
                </CardContent>
            </Card>

            <Card className=" bg-slate-400 w-100 h-100
      hover:translate-x-50
      rounded-3xl border-4 border-slate-900
      shadow-xl shadow-slate-900/50
      transition-transform 
      " >
                <CardContent
                    className=" text-3xl text-lime-900 font-semibold 
          w-full h-full flex justify-center items-center
          "
                >
                    transition-transform<br />
                    hover:translate-x-50
                </CardContent>
            </Card>

            <Card className=" bg-slate-600 w-100 h-100
      hover:translate-x-50
      rounded-3xl border-4 border-slate-900
      shadow-xl shadow-slate-900/50
      transition-transform duration-2000 
      " >
                <CardContent
                    className=" text-3xl text-slate-200 font-semibold 
          w-full h-full flex flex-col justify-center items-center
          "
                >
                    <i>duration-2000</i>
                    <br />
                    <p>transition-transform</p>
                    <p>hover:translate-x-50</p>

                </CardContent>
            </Card>
            <Card className=" bg-blue-600 w-100 h-100
      hover:translate-x-50
      rounded-3xl border-4 border-blue-900
      shadow-xl shadow-blue-900/50
      transition-transform duration-4000 
      " >
                <CardContent
                    className=" text-3xl text-blue-200 font-semibold 
          w-full h-full flex flex-col justify-center items-center
          "
                >
                    <i>duration-4000</i>
                    <br />
                    <p>transition-transform</p>
                    <p>hover:translate-x-50</p>

                </CardContent>
            </Card>
            <Card className=" bg-lime-600 w-100 h-100
      hover:translate-x-50 hover:bg-red-600
      rounded-3xl border-4 border-lime-900
      shadow-xl shadow-blue-900/50
      transition-all duration-1000 
      " >
                <CardContent
                    className=" text-3xl text-lime-200 font-semibold 
          w-full h-full flex flex-col justify-center items-center
          "
                >
                    <i>transition-all</i>
                    <br />
                    <p>duration-1000</p>
                    <p>hover:translate-x-50</p>
                    <p>hover:bg-red-600</p>

                </CardContent>
            </Card>
            <Card className=" bg-lime-600 w-100 h-100
      hover:translate-x-100
      rounded-3xl border-4 border-lime-900
      shadow-xl shadow-blue-900/50
      transition-all duration-2000 linear
      " >
                <CardContent
                    className=" text-3xl text-lime-200 font-semibold 
          w-full h-full flex flex-col justify-center items-center
          "
                >
                    <i>transition-all</i>
                    <i>linear</i>
                    <br />
                    <p>transition-all</p>
                    <p>duration-2000</p>
                    <p>hover:translate-x-100</p>


                </CardContent>
            </Card>
            <Card className=" bg-lime-600 w-100 h-100
      hover:translate-x-100
      rounded-3xl border-4 border-lime-900
      shadow-xl shadow-blue-900/50
      transition-all duration-2000 ease-in-out
      " >
                <CardContent
                    className=" text-3xl text-lime-200 font-semibold 
          w-full h-full flex flex-col justify-center items-center
          "
                >
                    <i>transition-all</i>
                    <i>ease-in-out</i>
                    <br />
                    <p>transition-all</p>
                    <p>duration-2000</p>
                    <p>hover:translate-x-100</p>


                </CardContent>
            </Card>
        </div>
    );
}
export default Transition;
