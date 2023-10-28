"use client";

import * as React from "react";
import clsx from "classnames";

const EditableDescription: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-3">
      <label className="text-xl font-extrabold">Description</label>
      <textarea
        placeholder="Example: 'World War II was a global war that lasted from 1939 to 1945...'"
        className={clsx({
          "rounded-md px-4 py-2 focus:ring": true,
          "border outline-none focus:border-transparent": true,
          "bg-slate-50 dark:bg-slate-900": true,
          "border-slate-300 dark:border-slate-600": true,
          "focus:bg-white dark:focus:bg-slate-800": true,
          "hover:bg-white dark:bg-slate-800": true,
          "focus:ring-slate-400 dark:focus:ring-slate-600": true,
          "h-24 max-h-48 min-h-[4rem] resize-y": true,
        })}
      />
    </div>
  );
};

export default EditableDescription;
