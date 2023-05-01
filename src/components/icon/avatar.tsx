import React from "react";
import Svg from "react-native-svg";
import { View } from "react-native";

import { IconProps, userAvatars } from "./interface";

export const Avatar = ({
  color = "#F2F2F2",
  avatarId = "avatar_1",
  containerStyle = {},
  ...props
}: IconProps) => {
  const Component = userAvatars[avatarId];

  return (
    <View
      //@ts-ignore
      style={[{ borderRadius: "100%", overflow: "hidden" }, containerStyle]}
    >
      <Svg
        width={50}
        height={50}
        id={avatarId}
        viewBox="0 0 381 381"
        {...props}
      >
        <Component color={color} {...props} />
      </Svg>
    </View>
  );
};
