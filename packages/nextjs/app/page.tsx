"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import "./Styles.css"

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="">
        <div className="flex-grow  w-full">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex  flex-col px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <div className="flex flex-row items-center">
                <div>
                <p className="text-secondary text-9xl text-bold mr-4">
                  HEY THERE, MAN!
                </p>
                <p className="text-white">
                Peep this MEME blockchain tech! It's shaking things up big time, right? Riding high on those decentralized waves, scoring those Pepeverse wins!
                </p>
                </div>
                <img src="ezgif-6-b2f8974694.gif" alt="GIF" className=" large-gif ml-4 mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
