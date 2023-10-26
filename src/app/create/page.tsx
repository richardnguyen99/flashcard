import * as React from "react";
import type { Metadata } from "next";

import Unauthorized from "@/components/template/unauthorized";
import { getServerAuthSession } from "@/server/auth";

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

  return <div></div>;
};

export default CreatePage;
