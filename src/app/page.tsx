import * as React from "react";

import { getServerAuthSession } from "@server/auth";
import Navbar from "./_components/navbar";

const Home: React.FC = async () => {
  const session = await getServerAuthSession();

  return (
    <main>
      <Navbar />
      <h1>Hello, {session?.user.name}</h1>
    </main>
  );
};

export default Home;
