"use client";

import { Fragment } from "react";
import clsx from "classnames";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@primer/octicons-react";
import { useTheme } from "next-themes";

import MoonIcon from "./moon-icon";
import SunIcon from "./sun-icon";
import SystemIcon from "./system-icon";

const themes = [
  { value: "dark", Icon: MoonIcon },
  { value: "light", Icon: SunIcon },
  { value: "system", Icon: SystemIcon },
];

export default function Example() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <Listbox as="div" value={theme} onChange={setTheme}>
        <div className="relative flex items-center justify-center">
          <Listbox.Button
            as="div"
            className="relative flex h-6 w-28 cursor-default items-center justify-between rounded-lg bg-slate-50 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:bg-slate-800 sm:text-sm"
          >
            <span className="block truncate capitalize">{theme}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon size={16} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute right-0 top-0 mt-8 max-h-32 w-full overflow-auto rounded-md bg-slate-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:shadow-slate-950 sm:text-sm">
              {themes.map((theme, themeIdx) => (
                <Listbox.Option
                  key={themeIdx}
                  className={({ active }) =>
                    clsx({
                      "flex items-center gap-3": true,
                      "relative cursor-default select-none": true,
                      "px-2 py-2": true,
                      "dark:bg-slate-700 dark:text-slate-100": active,
                      "bg-slate-100 text-gray-900": active,
                    })
                  }
                  value={theme.value}
                >
                  {({ selected }) => (
                    <>
                      <theme.Icon
                        className={clsx({
                          "h-5 w-5": true,
                          "stroke-sky-500": selected,
                        })}
                      />
                      <span
                        className={clsx({
                          "block truncate capitalize": true,
                          "font-medium text-sky-400": selected,
                          "font-normal": !selected,
                        })}
                      >
                        {theme.value}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
