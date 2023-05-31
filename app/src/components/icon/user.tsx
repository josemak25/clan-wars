import React from "react";
import { View } from "react-native";
import Svg, {
  G,
  Defs,
  Path,
  Circle,
  SvgProps,
  ClipPath,
} from "react-native-svg";

export const User = ({ color = "#7d69ff", ...props }: SvgProps) => (
  <View
    //@ts-ignore
    style={{ borderRadius: "100%", overflow: "hidden" }}
  >
    <Svg width={35} height={35} viewBox="0 0 100 100" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path
            data-name="Path 2802"
            d="M49.062 0A49.062 49.062 0 1 1 0 49.062 49.062 49.062 0 0 1 49.062 0Z"
            fill="none"
          />
        </ClipPath>
      </Defs>
      <G data-name="Group 1643">
        <Circle
          data-name="Ellipse 217"
          cx={49.5}
          cy={49.5}
          r={49.5}
          fill="#f4f2ff"
        />
        <G
          data-name="Mask Group 14"
          transform="translate(.85 .583)"
          clipPath="url(#a)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        >
          <G
            data-name="Group 1610"
            fill={color}
            stroke={color}
            strokeWidth={2.5}
          >
            <G
              data-name="Ellipse 215"
              transform="translate(30.703 24.672)"
              opacity={0.28}
            >
              <Circle cx={19.18} cy={19.18} stroke="none" r={19.18} />
              <Circle cx={19.18} cy={19.18} fill="none" r={17.93} />
            </G>
            <Path
              data-name="Path 2799"
              d="M12.062 109.24V83.7s6.281-10.773 36.59-10.672S85.533 83.7 85.533 83.7v25.54"
            />
          </G>
        </G>
      </G>
    </Svg>
  </View>
);
