"use client";

import * as React from "react";

import LoginModal from "@/components/login-modal";

interface LoginModalContextProps {
  opening: boolean;
  openModal: (callbackUrl: string) => void;
  closeModal: () => void;
}

const LoginModalContext = React.createContext<LoginModalContextProps>(
  {} as LoginModalContextProps,
);

const LoginModalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [opening, setOpening] = React.useState(false);
  const [callbackUrl, setCallbackUrl] = React.useState("/");

  const handleOpen = (callbackUrl: string) => {
    setOpening(true);
    setCallbackUrl(callbackUrl);
  };

  const handleClose = () => {
    setOpening(false);
    setCallbackUrl("/");
  };

  const value = React.useMemo(
    () => ({ opening, closeModal: handleClose, openModal: handleOpen }),
    [opening],
  );

  return (
    <LoginModalContext.Provider value={value}>
      {children}
      <LoginModal
        isOpen={opening}
        closeModal={handleClose}
        callbackUrl={callbackUrl}
      />
    </LoginModalContext.Provider>
  );
};

LoginModalProvider.displayName = "LoginModalProvider";

export const useLoginModal = () => {
  const context = React.useContext(LoginModalContext);

  if (context === undefined) {
    throw new Error("useLoginModal must be used within a LoginModalProvider");
  }

  return context;
};

export default LoginModalProvider;
