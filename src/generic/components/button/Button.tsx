import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  rest?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button = ({ label, onClick, ...rest }: ButtonProps) => {
  return (
    <button
      className="border px-4 py-1 rounded"
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
