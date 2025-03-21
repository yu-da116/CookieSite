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
            心を込めて作る、世界に一つだけのアート
          </h2>
          
          <p className="mb-6 text-brown-default leading-relaxed">
            Meow meowアイシングクッキー教室では、一つ一つ丁寧に手作りされたクッキーに、カラフルで美しいアイシングデコレーションを施す方法をお教えします。
            初めての方でも簡単に始められるよう、基本的な技術からステップバイステップでレクチャー。プロのアイシングアーティストが丁寧に指導します。
          </p>
          
          <div className="mt-10 flex justify-center">
            <div className="w-20 h-1 bg-beige rounded-full"></div>
          </div>
          
          <div className="mt-10">
            <h3 className="font-serif text-2xl font-bold mb-4 text-brown-default">
              高品質な材料と道具を使用し、安心・安全なお菓子作りをサポートします。
            </h3>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-serif text-xl font-semibold mb-3 text-brown-default">教室の特徴</h4>
              <ul className="list-disc pl-5 text-brown-light">
                <li>少人数制で丁寧な指導</li>
                <li>初心者でも安心のステップバイステップレッスン</li>
                <li>オリジナルデザインのサポート</li>
                <li>季節のイベントに合わせたクラス</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-serif text-xl font-semibold mb-3 text-brown-default">レッスン内容</h4>
              <ul className="list-disc pl-5 text-brown-light">
                <li>基本的なアイシング技術</li>
                <li>カラーミキシングとデザイン</li>
                <li>細部の装飾テクニック</li>
                <li>ギフトラッピングのコツ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
