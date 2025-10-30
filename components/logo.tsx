import Image from "next/image";

<Image
  src="https://html.tailus.io/blocks/customers/nvidia.svg"
  alt="Nvidia"
  width={80}
  height={24}
  className="dark:invert"
/>;
export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/inuv8_logo_dark.svg"
      alt="Inuv8 Studios"
      className={`w-25 h-25 ${className}`}
    />
  );
};
