type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isTransparent?: boolean;
};

export function Button({
  children,
  isTransparent,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      data-transparent={isTransparent}
      className={`text-text-inverse text-sm py-4 px-8 rounded-[.625rem] bg-surface-primary hover:bg-surface-hover-primary
      transition-all cursor-pointer  flex items-center justify-center gap-2 outline-none
      data-[transparent=true]:bg-white/10 data-[transparent=true]:backdrop-blur-sm data-[transparent=true]:hover:bg-white/20 ${className}`}
    >
      {children}
    </button>
  );
}
