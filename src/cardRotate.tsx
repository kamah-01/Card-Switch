import { useState } from "react";


const Card:React.FC = () => {

    const [cardForward, setCardForward] = useState<"image" | "text" | null> (null);

    const handleClick = (card: "image" | "text") => {
        setCardForward((prevCard) => (prevCard === card ? null : card));
    }

  return (
    <div className="flex items-center justify-center min-h-screen gap-8 perspective-1000">

  <div 
  className={`flex items-center justify-center h-48 w-48 border bg-slate-500 border-slate-400 rounded-lg 
    transition-transform duration-500 transform-gpu ${cardForward === "image" ? "z-10 scale-110 rotate-12" : "z-0 rotate-y-0" } `}
    onClick={()=> handleClick("image")}
    >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYEcL7Ylt3xt-yRW-cE9ItqsQjETjSyEo2w&s" alt="yere"
    className="h-full w-full"
    /> 
  </div>

  <div 
  className={`h-48 w-48 border border-slate-800 bg-red-400 rounded-lg transition-transform
    duration-500 transform-gpu  ${ cardForward === "text" ? "z-10 scale-110 -rotate-12" : "z-0 rotate-y-0" }`}
    onClick={() => handleClick("text")}
    >
    <p className="text-center font-bold">
        story of the music item
    </p>
  </div>
</div>

  )
}

export default Card;