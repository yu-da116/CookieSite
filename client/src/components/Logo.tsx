type LogoSize = "default" | "sm";

interface LogoProps {
  size?: LogoSize;
}

const Logo = ({ size = "default" }: LogoProps) => {
  const textSize = size === "default" ? "text-2xl" : "text-xl";
  
  return (
    <div className="flex items-center">
      <span className={`${textSize} font-serif font-bold text-brown-default`}>
        Meow meow
      </span>
    </div>
  );
};

export default Logo;
