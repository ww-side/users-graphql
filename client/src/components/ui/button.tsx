import { type ReactNode } from "react";
import cx from "classnames";

export default function Button({
  children,
  className,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}) {
  const titleClasses = cx("p-2 rounded-md text-white bg-black", className);

  return (
    <button type={type} className={titleClasses} onClick={onClick}>
      {children}
    </button>
  );
}
