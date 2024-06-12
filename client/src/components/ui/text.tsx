"use client";

import { type ReactNode } from "react";

export default function Text({
  as: Element = "p",
  children,
  className,
}: {
  as?: "p" | "span";
  className?: string;
  children: ReactNode;
}) {
  return <Element className={className}>{children}</Element>;
}
