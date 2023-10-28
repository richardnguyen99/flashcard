import * as React from "react";
import type { Metadata } from "next";

import Unauthorized from "@/components/template/unauthorized";
import { getServerAuthSession } from "@/server/auth";
import EditableTitle from "@/components/flashcard/editable-title";
import EditableDescription from "@/components/flashcard/editable-description";
import EditableSchool from "@/components/flashcard/editable-school";

export const generateMetadata = async (): Promise<Metadata> => {
  const session = await getServerAuthSession();

  return {
    title: session?.user ? "Create - FlashCard" : "Unauthorized - FlashCard",
    description: "Create a new flashcard set",
  };
};

const CreatePage: React.FC = async () => {
  const session = await getServerAuthSession();

  if (!session?.user) {
    return <Unauthorized page="create" signInCallback="/create" />;
  }

  return (
    <div className="mx-auto max-w-5xl px-8">
      <div className="flex h-40 flex-col justify-center gap-4">
        <h1 className="text-4xl font-black">Create a new study set</h1>
        <p>
          Last saved at <span className="font-bold">12:00 PM</span>
        </p>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <EditableTitle />
        <EditableDescription />
        <div className="flex items-center gap-4">
          <div className="w-1/2">
            <EditableSchool />
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
