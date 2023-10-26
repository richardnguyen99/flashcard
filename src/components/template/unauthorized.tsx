import * as React from "react";

import SignInHandler from "./signin-handler";

interface Props {
  page: string;
  signInCallback?: string;
}

const Unauthorized: React.FC<Props> = ({ page, signInCallback }) => {
  return (
    <div className="mx-auto flex h-80 max-w-5xl items-center justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-black text-slate-950 dark:text-white">
          Please log in to FlashCard to continue
        </h1>
        <div className="inline-block text-lg font-medium text-slate-600 dark:text-slate-400">
          You must be logged in to see this page {page}.<br />
          (Psst. It&apos;s very easy to{" "}
          <SignInHandler
            signInCallback={signInCallback}
            className="font-black text-black dark:text-white"
          >
            log in
          </SignInHandler>
          !)
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
