import React from "react";

import { Avatar } from "./avatar";
import { appIcons, IconProps } from "./interface";

export const Icon: React.FC<IconProps> = React.memo(
  ({ isOnlyIcon = true, ...props }) => {
    const inferredProps = props.size
      ? { width: props.size, height: props.size }
      : {};

    const Component = props.name === "avatar" ? Avatar : appIcons[props.name];

    return (
      <Component
        {...props}
        isonlyicon={String(isOnlyIcon)}
        {...inferredProps}
      />
    );
  }
);
