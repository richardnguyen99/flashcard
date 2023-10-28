"use client";

import * as React from "react";
import clsx from "classnames";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@primer/octicons-react";

interface Result {
  objectId: string;
  name: string;
  state: {
    objectId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    Universities: {
      __type: string;
      className: string;
    };
    __type: string;
    className: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface DataResult {
  results: Result[];
  count: number;
}

const EditableSchool: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = React.useState<Result>();
  const [query, setQuery] = React.useState("");
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);
  const [data, setData] = React.useState<Result[]>([]);

  const [loading, setLoading] = React.useState(false);

  const handleChange = React.useCallback(
    (newString: string) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setLoading(true);
      const newTimeoutId = setTimeout(() => {
        setQuery(newString);
      }, 500);

      setTimeoutId(newTimeoutId);
    },
    [timeoutId],
  );

  React.useEffect(() => {
    fetch(`/api/school?query=${query}`)
      .then((res) => res.json())
      .then((res: DataResult) =>
        setData(() => {
          setLoading(false);
          return res.results;
        }),
      )
      .catch(console.error);
  }, [query]);

  return (
    <div className="flex flex-col justify-center gap-3">
      <label className="text-xl font-extrabold">School</label>
      <Combobox value={selectedSchool} onChange={setSelectedSchool}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-md text-left focus:outline-none  sm:text-sm">
            <Combobox.Input<Result>
              className={clsx({
                "rounded-md px-4 py-2 focus:ring": true,
                "border outline-none focus:border-transparent": true,
                "bg-slate-50 dark:bg-slate-900": true,
                "border-slate-300 dark:border-slate-600": true,
                "focus:bg-white dark:focus:bg-slate-800": true,
                "hover:bg-white dark:bg-slate-800": true,
                "focus:ring-slate-400 dark:focus:ring-slate-600": true,
                "w-full": true,
              })}
              placeholder="Type to search for your school"
              onChange={(event) => handleChange(event.target.value)}
              displayValue={(school) =>
                school ? `${school.name} - ${school.state.name}` : ""
              }
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              {loading && (
                <Combobox.Button className="">
                  <ChevronUpIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              )}
              <Combobox.Button className="">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
          </div>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-md border bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none dark:border-slate-600 dark:bg-slate-800 sm:text-sm">
              {data.length === 0 && (
                <Combobox.Option
                  value={null}
                  disabled
                  className="px-4 py-2 font-bold text-red-500 hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  No school
                </Combobox.Option>
              )}
              {data.map((school) => (
                <Combobox.Option
                  key={school.objectId}
                  value={school}
                  className={({ active, selected }) =>
                    clsx({
                      "px-4 py-2": true,
                      "hover:bg-slate-100 dark:hover:bg-slate-700": true,
                      "bg-slate-100 dark:bg-slate-700": active || selected,
                    })
                  }
                >
                  {school.name} - {school.state.name}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default EditableSchool;
