import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ghost?: boolean;
  outline?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  size?: "sm" | "lg" | "xs";
}

export const IconButton = ({
  children,
  onClick,
  ghost = false,
  outline = false,
  className = "",
  isDisabled = false,
  size = "sm",
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`btn ${size && "btn-" + size} ${outline ? "btn-outline" : "border-0"} ${ghost && "btn-ghost"}
        ${className} ${isDisabled && "btn-disabled"}
        ${!ghost && !outline && "bg-secondary-6 dark:bg-accent-1 text-white dark:text-accent-7"}
        rounded-xl hover:cursor-pointer`}
    >
      {children}
    </button>
  );
};
