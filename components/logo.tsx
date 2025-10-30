export const Logo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/inuv8_logo_dark.svg"
      alt="Inuv8 Studios"
      className={`w-25 h-25 ${className}`}
    />
  );
};