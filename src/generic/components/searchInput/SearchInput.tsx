import React from 'react';
import { IoSearch } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

interface SearchInputProps {
  value: string;
  type: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  background: string;
  iconColor: string;
}

const SearchInput = ({
  value,
  iconColor,
  background,
  onChange,
  type,
  placeholder,
  disabled,
}: SearchInputProps) => {
  return (
    <div className="relative z-0 mt-6 mx-auto w-full max-w-2xl">
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="w-full py-3 pl-10 pr-10 rounded text-white placeholder-gray-400"
        style={{ backgroundColor: background }}
        disabled={disabled}
      />
      <IoSearch
        size={20}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a3d900]"
      />
      <LuSettings2
        size={20}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90"
        style={{ color: iconColor }}
      />
    </div>
  );
};

export default SearchInput;
