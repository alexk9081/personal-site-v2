import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const MainPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  min-height: 100vh;
`;

export default function Page404({ statusCode }: any) {
  return (
    <>
      <Head>
        <title>Alex Keo</title>
      </Head>
      <MainPage>
        <Title>An Error Occured</Title>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </MainPage>
    </>
  );
}

Page404.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
