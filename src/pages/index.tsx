import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getOptionsForVote } from "../utils/getRandomPokemon";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const [first, second] = getOptionsForVote();
  console.log(first, second);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-2xl text-center">Which Pokémon is Rounder?</div>
        <div className="p-4" />
        <div className="border rounded p-8 flex justify-between max-w-7xl items-center">
          <div className="w-16  h-16 bg-slate-300" suppressHydrationWarning>
            {first}
          </div>
          <div className="p-8">Vs</div>
          <div className="w-16 h-16 bg-red-500" suppressHydrationWarning>
            {second}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
