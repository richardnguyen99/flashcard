import * as React from "react";
import clsx from "classnames";
import Link from "next/link";

import { getServerAuthSession } from "@server/auth";

const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 z-[10] h-fit border-b border-zinc-300 bg-white py-2  dark:bg-gray-950 ">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-8">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] dark:border-white md:block">
            Quizmify
          </p>
        </Link>
        <div className="flex items-center">
          {session?.user ? session?.user.name : "World"}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
