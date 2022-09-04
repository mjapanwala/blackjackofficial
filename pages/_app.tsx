import type { AppProps } from "next/app";
import "@styles/global.css";
import GameContainer from "@containers/GameContainer/GameContainer";
export default function MyApp(AppProps: AppProps) {
  const { Component, pageProps, router } = AppProps;
  // console.log(AppProps);
  // console.log(pageProps);
  return (
    <GameContainer>
      
      <Component {...pageProps} {...router} />
    </GameContainer>
  );
}

// /  index.tsx

// mu/hello
// mu/hello.tsx
