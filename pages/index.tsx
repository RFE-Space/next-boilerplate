import { Layout } from "@/components";
import Head from "next/head";
import { ReactNode } from "react";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
