import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = 'products';
    }
  }, []);

  const products = [
    {
      id: 1,
      name: "アイシングクッキー",
      description: "かわいい動物モチーフのアイシングクッキー",
      imageUrl: "/assets/cookie1.jpg",
    },
    {
      id: 2,
      name: "イースターモチーフ",
      description: "季節に合わせた特別なデザインクッキー",
      imageUrl: "/assets/cookie2.jpg",
    },
    {
      id: 3,
      name: "贈り物クッキー",
      description: "大切な人への心のこもったメッセージ付きクッキー",
      imageUrl: "/assets/cookie3.jpg",
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-16 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold mb-12 text-center text-brown-default">
          あなたが好きになるもの
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-3xl overflow-hidden shadow-md">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2 text-brown-default">{product.name}</h3>
                <p className="text-brown-light">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
