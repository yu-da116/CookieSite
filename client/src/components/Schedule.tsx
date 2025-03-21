import { useState, useRef, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import { format, addMonths } from "date-fns";

const Schedule = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  const [currentDate, setCurrentDate] = useState(new Date());
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = 'schedule';
    }
  }, []);

  // Mock lesson data - in a real app, this would come from an API
  const lessons = [
    {
      id: 1,
      title: "初めての方向けレッスン",
      date: "2023-12-05",
      time: "10:00",
      available: true
    },
    {
      id: 2,
      title: "月替わりレッスン",
      date: "2023-12-12",
      time: "13:00",
      available: true
    },
    {
      id: 3,
      title: "誕生日レッスン",
      date: "2023-12-15",
      time: "15:00",
      available: false
    },
    {
      id: 4,
      title: "初めての方向けレッスン",
      date: "2023-12-20",
      time: "10:00",
      available: true
    }
  ];

  const handlePrevMonth = () => {
    setCurrentDate(prev => addMonths(prev, -1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1));
  };

  const calendarEvents = lessons.map(lesson => ({
    id: String(lesson.id),
    title: `${lesson.time} ${lesson.title}`,
    date: lesson.date,
    className: lesson.available ? 'available-lesson' : 'fully-booked-lesson',
    extendedProps: {
      available: lesson.available,
      time: lesson.time
    }
  }));

  return (
    <section 
      ref={sectionRef}
      className={`py-16 bg-beige bg-opacity-20 section-fade ${isIntersecting ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold mb-12 text-center text-brown-default">
          レッスンスケジュール
        </h2>
        
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <button 
              className="p-2 text-brown-default hover:text-brown-light"
              onClick={handlePrevMonth}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <h3 className="font-serif text-xl font-bold text-brown-default">
              {format(currentDate, 'yyyy年MM月')}
            </h3>
            
            <button 
              className="p-2 text-brown-default hover:text-brown-light"
              onClick={handleNextMonth}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Calendar */}
          <div className="custom-calendar">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              locale={jaLocale}
              events={calendarEvents}
              headerToolbar={false}
              initialDate={currentDate}
              height="auto"
              dayMaxEvents={1}
              eventContent={(eventInfo) => {
                const available = eventInfo.event.extendedProps.available;
                return (
                  <div className={`text-xs p-1 ${available ? 'text-brown-default' : 'text-brown-light'}`}>
                    {eventInfo.timeText} {eventInfo.event.title.replace(eventInfo.timeText, '')}
                    <div className="mt-1">
                      {available ? '予約可能' : '満席'}
                    </div>
                  </div>
                );
              }}
            />
          </div>
          
          <div className="mt-8 pt-4 border-t border-beige-light">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded bg-beige-light bg-opacity-30 mr-2"></div>
                <span className="text-sm text-brown-light">レッスン可能</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 rounded bg-accent bg-opacity-30 mr-2"></div>
                <span className="text-sm text-brown-light">満席</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
