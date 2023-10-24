import * as React from "react";

interface CredentialsItemProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.FC<React.SVGAttributes<SVGElement>>;
}

const CredentialsItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & CredentialsItemProps
>(({ children, onClick, icon: Icon = undefined, ...rest }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof onClick !== "undefined" && typeof onClick === "function")
      onClick(e);
  };

  return (
    <button
      {...rest}
      ref={ref}
      onClick={handleClick}
      className="group flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm text-white hover:bg-sky-900"
    >
      {Icon && <Icon className="stroke-sky-500 group-hover:stroke-white" />}
      <div className="w-full text-left text-slate-800 group-hover:text-white dark:text-slate-50">
        {children}
      </div>
    </button>
  );
});

CredentialsItem.displayName = "CredentialsItem";

export default CredentialsItem;
