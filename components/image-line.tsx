import Image from "next/image";

type ImageDividerProps = {
  src?: string; // Path to image (default: "/divider.png")
  width?: number; // Image width
  height?: number; // Image height
  alt?: string; // Alt text
  className?: string; // Custom styles
};

export function ImageDivider({
  src = "/divider.png",
  width = 600,
  height = 40,
  alt = "Section Divider",
  className = "",
}: ImageDividerProps) {
  return (
    <div className={`w-full my-20 flex justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="opacity-80 dark:invert transition-opacity duration-500"
      />
    </div>
  );
}