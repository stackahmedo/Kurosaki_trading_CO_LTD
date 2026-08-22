import React from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  to?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', to, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-bold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-forest text-white hover:bg-deepForest",
      secondary: "bg-deepRed text-white hover:bg-deepRed/90",
      outline: "border border-forest text-forest bg-transparent hover:bg-forest hover:text-white",
      ghost: "text-charcoal hover:bg-lightGray",
    };
    
    const sizes = {
      sm: "px-5 py-2.5 text-[13px]",
      md: "px-8 py-3 text-sm",
      lg: "px-8 py-3 text-sm",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (to) {
      return (
        <Link to={to} className={classes}>
          {props.children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
