import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-blue-700 text-3xl">Hello EVM Frontend Sample</h1>
      </div>
      <div className="p-5"></div>
      <div className="flex justify-center">
        <button className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500">
          <Link href="/callcontract">call contract</Link>
        </button>
      </div>
    </>
  );
};
export default Home;
