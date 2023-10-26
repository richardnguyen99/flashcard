"use client";

import * as React from "react";

import { useLoginModal } from "@/app/_components/login/provider";

interface Props {
  signInCallback?: string;
}

const SignInHandler: React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement> & Props>
> = ({ signInCallback, children, ...rest }) => {
  const { openModal } = useLoginModal();

  const handleClick = React.useCallback(() => {
    openModal(signInCallback ?? "/");
  }, [openModal, signInCallback]);

  return (
    <span onClick={handleClick} {...rest}>
      {children}
    </span>
  );
};

export default SignInHandler;
