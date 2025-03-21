import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = 'about';
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-16 bg-beige bg-opacity-20 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-8 text-brown-default">
            完璧な焼き具合を求めて
          </h2>
          
          <p className="mb-6 text-brown-default leading-relaxed">
            シュレットベーカリーで美味しさを発見。愛情を込めて丁寧に作られた、焼きたてのおやつをかじる様子を想像してみてください。想像する
            必要はありません。私たちのペストリーは、焼いたその日に包装し、配達されるため、オーブンで焼きたてのおいしさをお約束します。
          </p>
          
          <div className="mt-10 flex justify-center">
            <div className="w-20 h-1 bg-beige rounded-full"></div>
          </div>
          
          <div className="mt-10">
            <h3 className="font-serif text-2xl font-bold mb-4 text-brown-default">
              最高級の天然成分で焼き上げています。焼きたての状態でお届けします。
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
