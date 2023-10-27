"use client";

import * as React from "react";
import clsx from "classnames";

const EditableTitle: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-3">
      <label className="text-xl font-extrabold">
        Your FlashCard Set Tittle
      </label>
      <input
        type="text"
        placeholder="Enter something here"
        className={clsx({
          "rounded-md px-4 py-2": true,
          "border ": true,
          "dark:border-slate-600 dark:hover:border-slate-400": true,
          "outline-none focus:border-transparent": true,
          "focus:ring focus:ring-slate-200 dark:focus:ring-slate-600": true,
          "bg-slate-50 dark:bg-slate-900": true,
          "hover:bg-white focus:bg-white": true,
          "border-slate-300 hover:border-slate-300 focus:ring-slate-400": true,
          " dark:hover:bg-slate-800": true,
          "dark:border-slate-300 dark:hover:border-slate-300 dark:focus:ring-slate-400":
            true,
        })}
      />
    </div>
  );
};

export default EditableTitle;
