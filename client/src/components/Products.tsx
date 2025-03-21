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
      name: "ペストリー",
      description: "あなたの満足を満たす天国のペストリーの創作",
      imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
    },
    {
      id: 2,
      name: "クッキー",
      description: "感動間違いなしの美味しく退屈的なクッキー",
      imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    },
    {
      id: 3,
      name: "パン",
      description: "焼き立ての食パンがたまらない",
      imageUrl: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
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
