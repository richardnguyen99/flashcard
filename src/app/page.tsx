import * as React from "react";

import { getServerAuthSession } from "@server/auth";
import Navbar from "./_components/navbar";
import FlashCardPreviewLayout from "@/components/flashcard/preview-layout";

const Home: React.FC = async () => {
  const session = await getServerAuthSession();

  return (
    <main>
      <Navbar />
      <div className="mx-auto mt-28 flex max-w-5xl flex-col gap-7 px-8">
        {session?.user ? (
          <FlashCardPreviewLayout />
        ) : (
          <div className="">
            <h1 className="text-5xl font-black">Trending Sets</h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Learn what the world is learning. Browse these trending flashcard
              sets to test your knowledge.
            </p>

            <div className="mt-4 h-3 w-32 bg-sky-500"></div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
