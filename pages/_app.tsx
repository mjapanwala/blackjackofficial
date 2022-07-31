import type { AppProps } from "next/app";
import "@styles/global.css";
export default function MyApp(AppProps: AppProps) {
  const { Component, pageProps, router } = AppProps;
  console.log(AppProps);
  console.log(pageProps);
  return <Component {...pageProps} {...router} />;
}

// /  index.tsx

// mu/hello
// mu/hello.tsx
