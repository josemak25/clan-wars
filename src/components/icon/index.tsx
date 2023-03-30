import React from "react";
import { SvgProps } from "react-native-svg";

import { Logo } from "./logo";
import { User } from "./user";

const appIcons = {
  user: User,
  logo: Logo,
};

export type IconType = keyof typeof appIcons;

type IconProps = SvgProps & {
  size?: number;
  name: IconType;
};

export const Icon: React.FC<IconProps> = (props) => {
  const inferredProps = props.size
    ? { width: props.size, height: props.size }
    : {};

  const Component = appIcons[props.name];
  return <Component {...props} {...inferredProps} />;
};
