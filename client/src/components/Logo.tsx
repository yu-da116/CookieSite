type LogoSize = "default" | "sm";

interface LogoProps {
  size?: LogoSize;
}

const Logo = ({ size = "default" }: LogoProps) => {
  const textClasses = size === "default" 
    ? "font-rounded text-2xl font-bold text-brown-default" 
    : "font-rounded text-xl font-bold text-brown-default";

  return (
    <span className={textClasses}>
      <span className="inline-block transform-gpu">M</span>eow <span className="inline-block transform-gpu">m</span>eow
    </span>
  );
};

export default Logo;
