"use client";

import * as React from "react";
import clsx from "classnames";
import { Dialog, Transition } from "@headlessui/react";
import { signIn } from "next-auth/react";
import Google from "next-auth/providers/google";
import { MarkGithubIcon } from "@primer/octicons-react";

interface DialogModalProps {
  isOpen: boolean;
  closeModal: () => void;

  callbackUrl?: string;
}

const DiscordIcon: React.FC = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 -28.5 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
          fill="#fff"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
  );
};

const GoogleIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  );
};

const LoginModal: React.FC<DialogModalProps> = ({ isOpen, closeModal }) => {
  const handleSignInWithDiscord = React.useCallback(() => {
    signIn("discord", {}).catch(console.error);
  }, []);

  const handleSignInWithGoogle = React.useCallback(() => {
    signIn("google", {}).catch(console.error);
  }, []);

  const handleSignInWithGithub = React.useCallback(() => {
    signIn("github", {}).catch(console.error);
  }, []);

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={clsx({
              "fixed inset-0": true,
              "bg-black bg-opacity-30 backdrop-blur-sm": true,
            })}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={clsx({
              "flex items-center justify-center": true,
              "min-h-full p-4 text-center": true,
            })}
          >
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx({
                  "w-full max-w-md p-6 align-middle": true,
                  "transform overflow-hidden transition-all": true,
                  "rounded-2xl text-left shadow-xl": true,
                  "bg-white dark:bg-slate-950": true,
                  "drop-shadow-lg": true,
                  "dark:shadow-slate-900": true,
                  "border border-slate-200 dark:border-slate-800": true,
                })}
              >
                <Dialog.Title
                  as="h1"
                  className="text-xl font-bold leading-6 text-gray-900 dark:text-slate-50"
                >
                  Login
                </Dialog.Title>

                <div className="mt-4 flex flex-col gap-4">
                  <button
                    onClick={handleSignInWithDiscord}
                    className="flex w-full items-center justify-center gap-4 rounded-md bg-[#5865F2] px-4 py-2 text-lg font-bold hover:bg-[#5d68e2]"
                  >
                    <DiscordIcon />
                    <p>Sign in with Discord</p>
                  </button>
                  <button
                    onClick={handleSignInWithGoogle}
                    className="flex w-full items-center justify-center gap-4 rounded-md border border-slate-400 bg-white px-4 py-2 text-lg font-bold text-black hover:bg-slate-50"
                  >
                    <GoogleIcon />
                    <p>Sign in with Google</p>
                  </button>
                  <button
                    onClick={handleSignInWithGithub}
                    className="flex w-full items-center justify-center gap-4 rounded-md border border-slate-600 bg-[#24292f] px-4 py-2 text-lg font-bold text-white hover:bg-[#242930] "
                  >
                    <MarkGithubIcon size={24} />
                    <p>Sign in with Github</p>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginModal;
