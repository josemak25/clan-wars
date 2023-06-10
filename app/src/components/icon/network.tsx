import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const Network = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 72 72"
    fill="rgba(128, 130, 133, 1)"
    {...props}
  >
    <Path d="M36.254 66.897a3.796 3.796 0 1 0 0-7.592 3.796 3.796 0 0 0 0 7.592Z" />
    <Path
      fillRule="evenodd"
      d="m44.091 16.046-2.228 2.734a51.347 51.347 0 0 0-5.829-.345A51.128 51.128 0 0 0 3.486 30.152c-.28.23-.621.346-.957.346a1.502 1.502 0 0 1-.956-2.659c9.66-8.002 21.903-12.409 34.466-12.409 2.71 0 5.398.216 8.052.616ZM32.78 29.922c-7.717.616-14.967 3.435-21.132 8.237a1.5 1.5 0 0 0-.26 2.108 1.5 1.5 0 0 0 2.108.26c4.898-3.815 10.536-6.273 16.55-7.25l2.734-3.355Zm17.426 18.562a25.205 25.205 0 0 0-14.171-4.331c-1.152 0-2.289.08-3.415.23l-3.03 3.716a22.427 22.427 0 0 1 6.445-.947c4.477 0 8.793 1.317 12.488 3.816a1.5 1.5 0 0 0 2.089-.406 1.495 1.495 0 0 0-.406-2.078ZM60.42 38.165c-4.928-3.84-10.546-6.404-16.54-7.596l-2.173 2.669c6.134.941 11.883 3.415 16.865 7.296a1.503 1.503 0 0 0 2.108-.265 1.49 1.49 0 0 0-.26-2.104ZM53.766 18.44a53.827 53.827 0 0 1 16.66 9.339 1.502 1.502 0 1 1-1.914 2.319 51.019 51.019 0 0 0-16.775-9.17l2.029-2.488Z"
      clipRule="evenodd"
    />
    <Path d="M14.487 61.003a1.49 1.49 0 0 1-.947-.335 1.503 1.503 0 0 1-.215-2.113L56.4 5.696a1.503 1.503 0 0 1 2.329 1.898L15.654 60.453c-.3.365-.731.55-1.167.55Z" />
  </Svg>
);