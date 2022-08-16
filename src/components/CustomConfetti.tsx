import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

type Props = {};

export default function CustomConfetti({}: Props) {
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} />;
}
