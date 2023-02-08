import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/component/Layout/Layout";
import Header from "@/component/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
