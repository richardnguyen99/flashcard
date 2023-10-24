"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import type { User } from "next-auth";
import Image from "next/image";

import CredentialsItem from "./item";
import ThemeToggler from "./theme-toggler";
import LogoutIcon from "./logout-icon";
import PrivacyIcon from "./privacy-icon";
import DashboardIcon from "./dashboard-icon";
import SettingIcon from "./setting-icon";
import FeedbackIcon from "./feedback-icon";
import ThemeIcon from "./theme-icon";
import { signOut } from "next-auth/react";
import TermOfServiceIcon from "./tos-icon";

interface CredentialsProps {
  user: User;
}
const Credentials: React.FC<CredentialsProps> = ({ user }) => {
  const handleSignout = async () => {
    void (await signOut({ callbackUrl: "/" }));
  };

  return (
    <div className="flex items-center justify-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center justify-center">
            <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full dark:bg-slate-700">
              <div className="relative aspect-square h-full w-full">
                {user.image && (
                  <Image
                    fill
                    src={user.image}
                    alt="Profile Picture"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md border bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
            <div className="px-2 py-2">
              <div className="gap mb-4 mt-2 flex flex-col pl-3">
                <h3 className="font-bold text-slate-100">
                  {user.name ?? "anonymous"}
                </h3>
                <p className="overflow-clip text-ellipsis text-sm text-slate-300">
                  {user.email ?? "anonymous"}
                </p>
              </div>
              <Menu.Item>
                <CredentialsItem icon={DashboardIcon}>
                  Dashboard
                </CredentialsItem>
              </Menu.Item>
              <Menu.Item>
                <CredentialsItem icon={SettingIcon}>Setting</CredentialsItem>
              </Menu.Item>
              <div>
                <CredentialsItem icon={ThemeIcon}>
                  <div className="flex w-full items-center justify-between">
                    <p>Theme</p>
                    <ThemeToggler />
                  </div>
                </CredentialsItem>
              </div>
            </div>
            <div className="px-2 py-2">
              <Menu.Item>
                <CredentialsItem icon={TermOfServiceIcon}>
                  Terms of Service
                </CredentialsItem>
              </Menu.Item>
              <Menu.Item>
                <CredentialsItem icon={PrivacyIcon}>
                  Privacy policy
                </CredentialsItem>
              </Menu.Item>
              <Menu.Item>
                <CredentialsItem icon={FeedbackIcon}>
                  Help & Feedback
                </CredentialsItem>
              </Menu.Item>
            </div>
            <div className="px-2 py-2">
              <Menu.Item>
                <CredentialsItem icon={LogoutIcon} onClick={handleSignout}>
                  Logout
                </CredentialsItem>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Credentials;
