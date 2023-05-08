import "../styles/global.scss";

import { Sidebar } from "../components/Sidebar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="flex gap-12">
        <Sidebar />
        <section className="flex-1 h-[100vh] py-6 overflow-auto">
          <Component {...pageProps} />
        </section>
      </main>
    </>
  );
}
