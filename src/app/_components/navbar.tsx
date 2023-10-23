import * as React from "react";
import Link from "next/link";
import clsx from "classnames";

import { getServerAuthSession } from "@server/auth";

const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <div
      className={clsx({
        "fixed inset-x-0 top-0 z-[10] h-fit": true,
        "border-b border-zinc-300 bg-white py-2 dark:bg-gray-950": true,
      })}
    >
      <div
        className={clsx({
          "flex items-center justify-between gap-2": true,
          "mx-auto h-full max-w-7xl px-8": true,
        })}
      >
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <p
            className={clsx({
              "rounded-lg border-2 border-b-4 border-r-4 border-black": true,
              "px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] dark:border-white md:block":
                true,
            })}
          >
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
