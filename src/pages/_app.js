import styles from "@/styles/Home.module.css";
import { AnimatePresence } from "framer-motion";
import "../css/index.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return (
    <div className={styles.main}>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
