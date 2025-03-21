import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface LessonsProps {
  onReserveClick: () => void;
}

const Lessons = ({ onReserveClick }: LessonsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = 'lessons';
    }
  }, []);

  const lessonTypes = [
    {
      id: 1,
      title: "初めてのアイシングクッキー",
      description: "アイシングクッキー作りの基本を学べる初心者向けのレッスンです。かわいい動物デザインのクッキーを一緒に作りましょう！",
      image: "/assets/cookie4.jpg"
    },
    {
      id: 2,
      title: "季節のモチーフレッスン",
      description: "Easter・クリスマス・バレンタインなど、季節に合わせたデザインのアイシングクッキーを作るスペシャルレッスン。",
      image: "/assets/cookie7.jpg"
    },
    {
      id: 3,
      title: "オーダーメイドギフトレッスン",
      description: "大切な人への贈り物にぴったりの、メッセージ付きアイシングクッキーの作り方を学ぶレッスン。心を込めた手作りギフトを作りましょう！",
      image: "/assets/cookie3.jpg"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-16 bg-beige bg-opacity-20 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold mb-6 text-center text-brown-default">
          LESSON TYPE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {lessonTypes.map((lesson) => (
            <div key={lesson.id} className="bg-white p-8 rounded-lg border border-beige-light shadow-sm">
              <div className="mb-4 rounded-lg overflow-hidden h-48">
                <img 
                  src={lesson.image} 
                  alt={lesson.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-center text-brown-default">
                {lesson.title}
              </h3>
              <p className="text-brown-light text-center mb-4">
                {lesson.description}
              </p>
              <div className="mt-6 text-center">
                <button 
                  onClick={onReserveClick}
                  className="inline-block px-6 py-2 bg-beige hover:bg-beige-dark text-brown-default rounded-full transition-colors shadow-sm"
                >
                  予約する
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lessons;
