import * as React from "react";
import Image from "next/image";
import type { User } from "next-auth";

interface CredentialsProps {
  user: User;
}

const Credentials: React.FC<CredentialsProps> = ({ user }) => {
  return (
    <button>
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
    </button>
  );
};

export default Credentials;
