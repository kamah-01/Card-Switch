import { useState } from "react";

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: "image1",
      content: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYEcL7Ylt3xt-yRW-cE9ItqsQjETjSyEo2w&s"
          alt="image1"
          className="h-full w-full rounded-lg"
        />
      ),
    },
    {
      id: "text",
      content: <p className="text-center font-bold text-white">Story of the music item</p>,
    },
    {
      id: "image2",
      content: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYEcL7Ylt3xt-yRW-cE9ItqsQjETjSyEo2w&s"
          alt="image2"
          className="h-full w-full rounded-lg"
        />
      ),
    },
  ];

  const angle = 360 / items.length;
  
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-64 h-64 perspective-1000">
        
        <div
          className="absolute inset-0 transform-gpu"
          style={{
            transform: `rotateY(${activeIndex * -angle}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 1s",
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`absolute top-1/2 left-1/2 w-40 h-40 bg-slate-500 flex items-center justify-center border border-slate-400 rounded-lg shadow-lg transition-transform duration-500`}
              style={{
                transform: `rotateY(${index * angle}deg) translateZ(200px)`,
              }}
              onClick={() => handleClick(index)}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
