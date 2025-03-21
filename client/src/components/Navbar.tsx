import { useState, useEffect } from "react";
import Logo from "./Logo";

interface NavbarProps {
  onNavigate: {
    about: () => void;
    products: () => void;
    lessons: () => void;
    schedule: () => void;
    contact: () => void;
  };
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all main sections and their positions
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (handler: () => void) => {
    handler();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center"
          onClick={(e) => e.preventDefault()}
        >
          <Logo />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a 
            href="#" 
            className={`nav-link px-1 py-2 text-brown-default hover:text-brown-light font-medium transition-colors ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(onNavigate.about);
            }}
          >
            教室について
          </a>
          <a 
            href="#" 
            className={`nav-link px-1 py-2 text-brown-default hover:text-brown-light font-medium transition-colors ${activeSection === 'products' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(onNavigate.products);
            }}
          >
            商品
          </a>
          <a 
            href="#" 
            className={`nav-link px-1 py-2 text-brown-default hover:text-brown-light font-medium transition-colors ${activeSection === 'lessons' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(onNavigate.lessons);
            }}
          >
            レッスン
          </a>
          <a 
            href="#" 
            className={`nav-link px-1 py-2 text-brown-default hover:text-brown-light font-medium transition-colors ${activeSection === 'schedule' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(onNavigate.schedule);
            }}
          >
            スケジュール
          </a>
          <a 
            href="#" 
            className={`nav-link px-1 py-2 text-brown-default hover:text-brown-light font-medium transition-colors ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(onNavigate.contact);
            }}
          >
            お問い合わせ
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brown-default focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-cream border-t border-beige-light ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-2 space-y-2">
          <a 
            href="#" 
            className="block py-2 text-brown-default hover:text-brown-light font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(onNavigate.about);
            }}
          >
            教室について
          </a>
          <a 
            href="#" 
            className="block py-2 text-brown-default hover:text-brown-light font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(onNavigate.products);
            }}
          >
            商品
          </a>
          <a 
            href="#" 
            className="block py-2 text-brown-default hover:text-brown-light font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(onNavigate.lessons);
            }}
          >
            レッスン
          </a>
          <a 
            href="#" 
            className="block py-2 text-brown-default hover:text-brown-light font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(onNavigate.schedule);
            }}
          >
            スケジュール
          </a>
          <a 
            href="#" 
            className="block py-2 text-brown-default hover:text-brown-light font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(onNavigate.contact);
            }}
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
