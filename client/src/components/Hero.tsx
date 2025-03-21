import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface HeroProps {
  onCTAClick: () => void;
}

const Hero = ({ onCTAClick }: HeroProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = 'hero';
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative pt-20 pb-10 md:pt-32 md:pb-20 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="焼きたてのパン" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="mb-6">
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-brown-default">
                アイシングクッキー教室
              </h1>
              <p className="text-lg md:text-xl text-brown-light">
                当店にお任せください！
              </p>
            </div>
            
            <p className="mb-8 text-brown-default">
              シュレットベーカリーでは、最高級の天然成分だけを使用して、丁寧に手作りした焼き立ての美味しさをお届けします。初心者から経験者まで楽しく学べるレッスンをご用意しています。
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={onCTAClick}
                className="px-6 py-3 bg-beige hover:bg-beige-dark text-brown-default rounded-full transition-colors shadow-md font-medium text-center"
              >
                レッスンを見る
              </button>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-beige hover:bg-beige-light text-brown-default rounded-full transition-colors font-medium text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
