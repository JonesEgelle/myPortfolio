export const SubmitButton = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/50 shadow-lg shadow-primary/25";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-2 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizes[size]} ${className}`;

  return (
    <button
      className={`${classes} inline-flex items-center justify-center gap-2 whitespace-nowrap`}
      {...props}
    >
      {children}
    </button>
  );
};
