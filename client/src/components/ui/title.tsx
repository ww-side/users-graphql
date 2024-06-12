import { type ReactNode } from "react";
import cx from "classnames";
import { TitleTag } from "@/config/tags";

export default function Title({
  as: Element = "h2",
  children,
  className,
}: {
  as: keyof typeof TitleTag;
  className?: string;
  children: ReactNode;
}) {
  const titleClasses = cx(TitleTag[Element], className);

  return <Element className={titleClasses}>{children}</Element>;
}
