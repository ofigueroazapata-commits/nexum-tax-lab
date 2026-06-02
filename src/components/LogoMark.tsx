import Image from "next/image";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export default function LogoMark({ size = 36, className = "" }: LogoMarkProps) {
  return (
    <Image
      src="/logo-mark.png"
      alt="Nexum Tax Lab"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
