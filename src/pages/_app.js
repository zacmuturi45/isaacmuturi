"use client"

import styles from "@/styles/Home.module.css";
import { AnimatePresence } from "framer-motion";
import "../css/index.css";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import PreLoader from "@/components/preloader";
import mailgo from "mailgo";
import LenisWrapper from "@/components/LenisWrapper";

const mailgoConfig = {
  dark: true,
};

export default function App({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cr, setCr] = useState(false);

  useEffect(() => {
    mailgo(mailgoConfig);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = "default"
      window.scrollTo(0, 0);
      setIt()
    }, 2500);
  }, [])

  const setIt = () => {
    setTimeout(() => {
      setCr(true)
    }, 600);
  }

  return (
    <div className={styles.main}>
      <AnimatePresence>
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <LenisWrapper>
        <AnimatePresence mode="wait">
          {cr && <Component key={router.route} {...pageProps} />}
        </AnimatePresence>
      </LenisWrapper>
    </div>
  );
}
