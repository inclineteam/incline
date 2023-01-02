import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className + "h-screen min-h-screen bg-dark"}>
      <Component {...pageProps} />
    </div>
  );
}
