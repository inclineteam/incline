import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Incline: A team of enthusiastic developers</title>
      </Head>

      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
