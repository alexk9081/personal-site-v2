import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function Page404({ statusCode }: any) {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <main>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </main>
    </>
  );
}

Page404.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};