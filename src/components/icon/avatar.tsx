import React from "react";
import Svg from "react-native-svg";

import { IconProps, userAvatars } from "./interface";

export const Avatar = ({
  color = "#F2F2F2",
  avatarId = "avatar_1",
  ...props
}: IconProps) => {
  const Component = userAvatars[avatarId];

  return (
    <Svg id={avatarId} width={50} height={50} viewBox="0 0 381 381" {...props}>
      <Component color={color} {...props} />
    </Svg>
  );
};
