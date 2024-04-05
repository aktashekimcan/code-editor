import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CodeProvider } from "../context/CodeContext"; // Make sure this path is correct

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CodeProvider>
      <Component {...pageProps} />
    </CodeProvider>
  );
}

export default MyApp;
