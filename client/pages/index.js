import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coedu English</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <H1>sdasdadad</H1>
      </main>
    </>
  );
}

const H1 = styled.h3`
  color: red;
`;

const Container = styled.div`
  background: linear-gradient(
    179.97deg,
    rgba(255, 252, 41, 0.9) -0.89%,
    #ffd85e 9.33%,
    #fbda9b 51.73%,
    #ffe175 67.57%,
    #faec87 97.2%
  );
`;
