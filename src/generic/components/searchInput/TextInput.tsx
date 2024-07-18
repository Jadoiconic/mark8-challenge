"use client"
import React from 'react';
import { IconType } from 'react-icons';

interface TextInputProps {
  value: string;
  type: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  background: string;
  iconColor?: string;
  icon: IconType;
}

const TextInput = ({
  value,
  onChange,
  background,
  icon: Icon,
  type,
  iconColor = '#a3d900',
  placeholder,
}: TextInputProps) => {
  return (
    <div className="relative z-0 mx-auto w-full max-w-2xl">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-10 rounded-lg outline-none placeholder-gray-400"
        style={{ backgroundColor: background }}
      />
      <Icon
        color={iconColor}
        size={20}
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
      />
    </div>
  );
};

export default TextInput;
