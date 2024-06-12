import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
}

export default function Input({ register, placeholder, ...rest }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className="w-[200px] px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      {...register}
      {...rest}
    />
  );
}
