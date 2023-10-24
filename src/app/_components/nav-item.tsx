import * as React from "react";
import clsx from "classnames";

interface Props {
  children: React.ReactNode;
}

const NavItem: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={clsx({
        "relative font-bold": true,
        "after:absolute after:content-['']": true,
        "after:bottom-[calc(50%-32px)] after:left-0": true,
        "after:right-0 after:h-1 after:w-full after:rounded-t-lg": true,
        "after:bg-transparent hover:after:bg-indigo-300": true,
      })}
    >
      {children}
    </div>
  );
};

export default NavItem;
