import Logo from "./Logo";

interface FooterProps {
  onNavigate: {
    about: () => void;
    products: () => void;
    lessons: () => void;
    schedule: () => void;
  };
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-beige py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#" 
              className="flex items-center"
              onClick={(e) => e.preventDefault()}
            >
              <Logo />
            </a>
          </div>
          
          <div className="mb-4 md:mb-0">
            <div className="flex flex-wrap justify-center space-x-4">
              <a 
                href="#" 
                className="text-brown-default hover:text-brown-light transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate.about();
                }}
              >
                教室について
              </a>
              <a 
                href="#" 
                className="text-brown-default hover:text-brown-light transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate.products();
                }}
              >
                商品
              </a>
              <a 
                href="#" 
                className="text-brown-default hover:text-brown-light transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate.lessons();
                }}
              >
                レッスン
              </a>
              <a 
                href="#" 
                className="text-brown-default hover:text-brown-light transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate.schedule();
                }}
              >
                スケジュール
              </a>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-brown-light">© {new Date().getFullYear()} Meow meow ベーカリー教室. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
