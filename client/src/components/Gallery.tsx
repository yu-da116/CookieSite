import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = 'gallery';
    }
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "猫のデザインクッキー",
      color: "bg-purple-100"
    },
    {
      id: 2,
      title: "バレンタインデザインクッキー",
      color: "bg-pink-100"
    },
    {
      id: 3,
      title: "誕生日モチーフのクッキー",
      color: "bg-yellow-100"
    },
    {
      id: 4,
      title: "うさぎモチーフのクッキー",
      color: "bg-blue-100"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-16 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold mb-12 text-center text-brown-default">
          作品ギャラリー
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className={`${item.color} overflow-hidden rounded-lg shadow-sm h-64 flex items-center justify-center p-4 transition-all duration-300 hover:scale-105`}>
              <p className="text-center font-medium text-brown-default">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
