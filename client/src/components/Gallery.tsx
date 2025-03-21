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

  const galleryImages = [
    {
      id: 1,
      imageUrl: "/images/S__25264151.jpg",
      alt: "猫のデザインクッキー"
    },
    {
      id: 2,
      imageUrl: "/images/S__25264152.jpg",
      alt: "バレンタインデザインクッキー"
    },
    {
      id: 3,
      imageUrl: "/images/S__25264153.jpg",
      alt: "誕生日モチーフのクッキー"
    },
    {
      id: 4,
      imageUrl: "/images/S__25264146.jpg",
      alt: "アイシングクッキー詰め合わせ"
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
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-sm">
              <img 
                src={image.imageUrl} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-all duration-300 hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
