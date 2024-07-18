import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  children?: any
};

const Button = ({ label, onClick, children }: ButtonProps) => {
  return (
    <button className='flex space-x-2 py-1 border items-center px-4 rounded-lg'>
      {children}
      <span>{label}</span>
    </button>
  );
};

export default Button;
