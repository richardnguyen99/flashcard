import * as React from "react";
import Link from "next/link";
import clsx from "classnames";

import { getServerAuthSession } from "@server/auth";
import { PlusIcon, SearchIcon } from "@primer/octicons-react";

const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <div
      className={clsx({
        "fixed inset-x-0 top-0 z-[10] h-fit py-3": true,
        "border-b border-zinc-300 dark:border-zinc-950": true,
        "bg-white dark:bg-slate-950": true,
      })}
    >
      <div
        className={clsx({
          "flex items-center justify-between gap-5": true,
          "mx-auto h-full max-w-7xl px-8": true,
        })}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <p
            className={clsx({
              "rounded-lg border-2 border-b-4 border-r-4": true,
              "border-black dark:border-slate-50": true,
              "px-2 py-1 font-mono text-xl font-bold md:block": true,
              "transition-all hover:-translate-y-[-2px]": true,
            })}
          >
            Flashcard
          </p>
        </Link>
        <div className="flex w-full items-center gap-5">
          <div className="flex items-center gap-4">
            <div>Categories</div>
            <Link href="/about">About</Link>
          </div>
          <form
            className={clsx({
              "flex w-full items-center justify-between gap-4": true,
              "rounded-full px-4 py-2": true,
              "dark:bg-slate-900": true,
            })}
          >
            <div className="flex w-full items-center gap-3">
              <SearchIcon size={16} />
              <input
                placeholder="Search..."
                className="w-full text-sm focus:outline-none dark:bg-slate-900"
              />
            </div>
            <div
              className={clsx({
                "font-mono text-xs": true,
                "rounded-md p-1": true,
                "border dark:border-slate-500": true,
              })}
            >
              Ctrl+K
            </div>
          </form>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center rounded-full p-1 transition-colors duration-200 ease-in-out dark:bg-sky-600 dark:hover:bg-sky-500">
              <PlusIcon size={24} />
            </div>
            {session?.user ? (
              <div>Logout</div>
            ) : (
              <>
                <div className="box-border flex w-fit cursor-pointer items-center justify-center rounded-md px-3 py-2 font-bold dark:hover:bg-slate-800">
                  <span className="whitespace-nowrap">Login</span>
                </div>
                <button className="box-border flex w-fit cursor-pointer items-center justify-center rounded-md px-3 py-2 font-bold dark:bg-amber-500 dark:text-black">
                  <span className="whitespace-nowrap">Sign up</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
