import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/home/HomePage";
import styles from "../styles/Home.module.css";

export default function App() {
  return (
    <div>
      <Head>
        <title>jmcretesolutions</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
      </Head>
      <HomePage />
    </div>
  );
}
