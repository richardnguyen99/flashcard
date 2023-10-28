"use client";

import * as React from "react";
import clsx from "classnames";

const EditableTitle: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-3">
      <label className="text-xl font-extrabold">Tittle</label>
      <input
        type="text"
        placeholder="Example: 'Wordld War 2 History', 'Calculus 1', ..."
        className={clsx({
          "rounded-md px-4 py-2 focus:ring": true,
          "border outline-none focus:border-transparent": true,
          "bg-slate-50 dark:bg-slate-900": true,
          "border-slate-300 dark:border-slate-600": true,
          "focus:bg-white dark:focus:bg-slate-800": true,
          "hover:bg-white dark:bg-slate-800": true,
          "focus:ring-slate-400 dark:focus:ring-slate-600": true,
        })}
      />
    </div>
  );
};

export default EditableTitle;
