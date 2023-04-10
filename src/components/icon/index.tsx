import React from "react";
import { appIcons, IconProps } from "./interface";

export const Icon: React.FC<IconProps> = ({ isOnlyIcon = true, ...props }) => {
  const inferredProps = props.size
    ? { width: props.size, height: props.size }
    : {};

  const Component = appIcons[props.name];

  return (
    <Component {...props} isonlyicon={String(isOnlyIcon)} {...inferredProps} />
  );
};
