"use client";

import * as React from "react";

import LoginForm from "./modal";

const LoginButton: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <button
        onClick={handleClick}
        className="box-border flex w-fit cursor-pointer items-center justify-center rounded-md px-3 py-2 font-bold dark:bg-amber-500 dark:text-black"
      >
        <span className="whitespace-nowrap">Login</span>
      </button>

      <LoginForm isOpen={isOpen} closeModal={handleClose} />
    </>
  );
};

export default LoginButton;
