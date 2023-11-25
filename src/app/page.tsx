import { NextPage } from "next";
import * as React from 'react';

const Home: NextPage = () => {
  const greeting: string = "Welcome to Movies now habibi";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{greeting}</h1>
    </main>
  );
};

export default Home;
