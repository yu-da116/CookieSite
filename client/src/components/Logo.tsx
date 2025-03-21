type LogoSize = "default" | "sm";

interface LogoProps {
  size?: LogoSize;
}

const Logo = ({ size = "default" }: LogoProps) => {
  const logoSize = size === "default" ? "h-10" : "h-8";
  
  return (
    <div className="flex items-center">
      <img 
        src="/assets/logo.jpg" 
        alt="Meow meow" 
        className={`${logoSize} object-contain`} 
      />
    </div>
  );
};

export default Logo;
