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
      imageUrl: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      alt: "ケーキ作品"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1564620299947-b55d0d21b068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      alt: "アイシングクッキー"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      alt: "デコレーションケーキ"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80",
      alt: "焼き立てパン"
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
