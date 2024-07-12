import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export const IconButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-secondary-6 dark:bg-accent-1 text-white dark:text-accent-7 p-2 rounded-xl hover:cursor-pointer"
    >
      {children}
    </button>
  );
};
