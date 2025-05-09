import { Card, CardContent } from "@/components/ui/card";

function Transform() {
    return (
        <div>
            <div className=" text-3xl text-lime-900 font-semibold text-center mt-5">father div:<br />perspective-[500px]</div>
            <div className="container mx-auto flex justify-evenly flex-wrap items-center h-screen perspective-[500px]">

                <Card className=" bg-slate-400 w-100 h-100
      transform-3d 
      hover:rotate-x-20
      transition-transform duration-300 ease-in-out
      rounded-3xl border-4 border-slate-900
      shadow-xl shadow-slate-900/50
      
      " >
                    <CardContent
                        className=" text-3xl text-lime-900 font-semibold 
          w-full h-full flex justify-center items-center
          "
                    >
                        transform-3d
                        hover:rotate-x-20
                    </CardContent>
                </Card>
                <Card className=" bg-lime-400 w-100 h-100
      transform-3d hover:rotate-y-20 
      transition-transform duration-300 ease-in-out
      rounded-3xl border-4 border-lime-900
      shadow-xl shadow-lime-900/50
      " >
                    <CardContent
                        className=" text-3xl text-lime-900 font-semibold 
          w-full h-full flex justify-center items-center
          "
                    >
                        transform-3d
                        hover:rotate-y-20
                    </CardContent>
                </Card>
                <Card className=" bg-amber-400 w-100 h-100
      transform-3d hover:rotate-z-20 
      transition-transform duration-300 ease-in-out
      rounded-3xl border-4 border-amber-900
      shadow-xl shadow-amber-900/50
      " >
                    <CardContent
                        className=" text-3xl text-amber-900 font-semibold 
          w-full h-full flex justify-center items-center
          "
                    >
                        transform-3d
                        hover:rotate-z-20
                    </CardContent>
                </Card>
                <Card className=" bg-sky-400 w-100 h-100
      transform-3d hover:translate-x-10 
      transition-transform duration-300 ease-in-out
      rounded-3xl border-4 border-sky-900
      shadow-xl shadow-sky-900/50
      " >
                    <CardContent
                        className=" text-3xl text-sky-900 font-semibold 
          w-full h-full flex justify-center items-center
          "
                    >
                        transform-3d
                        hover:translate-x-10
                    </CardContent>
                </Card>
                <Card className=" bg-sky-600 w-100 h-100
      transform-3d hover:translate-y-10 
      transition-transform duration-300 ease-in-out
      rounded-3xl border-4 border-sky-900
      shadow-xl shadow-sky-900/50
      " >
                    <CardContent
                        className=" text-3xl text-sky-900 font-semibold 
          w-full h-full flex justify-center items-center
          "
                    >
                        transform-3d
                        hover:translate-y-10
                    </CardContent>
                </Card>
                <Card className=" bg-sky-800 w-100 h-100
      transform-3d hover:translate-z-10 
      transition-transform duration-300 ease-in-out
      rounded-3xl border-4 border-sky-400
      shadow-xl shadow-sky-900/50
      " >
                    <CardContent
                        className=" text-3xl text-sky-400 font-semibold 
          w-full h-full flex justify-center items-center
          "
                    >
                        transform-3d
                        hover:translate-z-10
                    </CardContent>
                </Card>
            </div></div>
    );
}
export default Transform;
