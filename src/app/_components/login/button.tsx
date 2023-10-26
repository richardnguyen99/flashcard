"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { useLoginModal } from "./provider";

const LoginButton: React.FC = () => {
  const pathname = usePathname();
  const { openModal } = useLoginModal();

  const handleClick = React.useCallback(() => {
    const callbackUrl = `${pathname}`;

    openModal(callbackUrl);
  }, [openModal, pathname]);

  return (
    <button
      onClick={handleClick}
      className="box-border flex w-fit cursor-pointer items-center justify-center rounded-md px-3 py-2 font-bold dark:bg-amber-500 dark:text-black"
    >
      <span className="whitespace-nowrap">Login</span>
    </button>
  );
};

export default LoginButton;
