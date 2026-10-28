import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "amber" | "emerald" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-blue-900 hover:bg-blue-950 text-white shadow-md shadow-blue-900/20 focus:ring-blue-700",
    secondary: "bg-amber-700 hover:bg-amber-800 text-white shadow-md shadow-amber-700/20 focus:ring-amber-600",
    amber: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold focus:ring-amber-400 shadow-md shadow-amber-500/20",
    emerald: "bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold focus:ring-emerald-500 shadow-md shadow-emerald-600/20",
    outline: "border-2 border-slate-300 hover:border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white focus:ring-slate-500",
    whatsapp: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 focus:ring-emerald-500",
    ghost: "bg-slate-100 hover:bg-slate-200 text-slate-700 focus:ring-slate-400"
  };

  const sizes = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
