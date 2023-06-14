import { Box, Button } from "@/components";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>nextplate-ui</title>
      </Head>
      <Box className="flex flex-col justify-center items-center h-screen">
        <h2 className="mb-4 text-6xl">nextplate-ui</h2>
        <p className="mb-6 text-2xl text-gray-600">
          NextJS Boilerplate by Ryan Adhitama
        </p>
        <Button style="outline">Go to Storybook</Button>
      </Box>
    </>
  );
}

export default Home;
