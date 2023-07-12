import "@/styles/globals.css";
import { Be_Vietnam_Pro } from "next/font/google";
import NextNProgress from "nextjs-progressbar";

const bVPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={bVPro.className}>
      <NextNProgress options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </div>
  );
}
