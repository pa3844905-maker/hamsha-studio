import React from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'ghost';
};

export default function Button({ children, className, variant = 'solid', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition';
  const styles =
    variant === 'solid'
      ? 'bg-black text-white hover:bg-buttonHover'
      : 'bg-transparent border border-border text-text hover:bg-secondaryBg';

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cx(base, styles, className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
