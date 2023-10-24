import * as React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@primer/octicons-react";

import NavItem from "./nav-item";

const Nav: React.FC = () => {
  return (
    <nav className="flex h-full items-center gap-4">
      <NavItem>
        <div className="flex items-center gap-3">
          <p>Categories</p>
          <ChevronDownIcon size={16} />
        </div>
      </NavItem>
      <Link href="/about">
        <NavItem>About</NavItem>
      </Link>
    </nav>
  );
};

export default Nav;
