import React from "react";
import { View } from "react-native";
import { SvgProps } from "react-native-svg";

import { makeUseStyles } from "../../helpers";

const NUMBER_OF_CELLS = 2;

export const Empty = (props: SvgProps & { size?: number }) => {
  const { styles } = useStyles();

  const scale = (props?.size || 100) / 100;

  return (
    <View style={[styles.container, { transform: [{ scale }] }, props.style]}>
      {[...Array(NUMBER_OF_CELLS)].map((_, index) => (
        <View
          key={`empty_list_cell_${index}`}
          style={[
            styles.content,
            index + 1 === NUMBER_OF_CELLS && styles.bottom,
          ]}
        >
          <View
            style={[
              styles.outerCircle,
              index + 1 === NUMBER_OF_CELLS - 1 && styles.topOuterCircle,
            ]}
          >
            <View style={styles.innerCircle} />
          </View>
          <View style={styles.list}>
            <View style={styles.topList} />
            <View style={[styles.topList, styles.bottomList]} />
          </View>
        </View>
      ))}
    </View>
  );
};

const useStyles = makeUseStyles(({ palette, layout, hexToRGB }) => ({
  container: {
    right: 20,
    marginBottom: 40,
  },
  content: {
    width: 180,
    height: 50,
    borderWidth: 1,
    gap: layout.gutter,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: layout.radius,
    backgroundColor: palette.background,
    paddingHorizontal: layout.gutter / 1.5,
    borderColor: hexToRGB(palette.text, 0.2),

    elevation: 5,
    shadowRadius: 8,
    shadowOpacity: 0.15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
  },
  bottom: {
    top: 36,
    left: 40,
    position: "absolute",
  },
  outerCircle: {
    width: 25,
    height: 25,
    borderWidth: 3,
    alignItems: "center",
    borderRadius: 25 / 2,
    justifyContent: "center",
    borderColor: hexToRGB(palette.primary, 0.7),
  },
  topOuterCircle: {
    borderColor: hexToRGB(palette.error, 0.4),
  },
  innerCircle: {
    width: 13,
    height: 13,
    borderRadius: 13 / 2,
    backgroundColor: hexToRGB(palette.text, 0.1),
  },
  list: {
    flex: 1,
    height: "100%",
    gap: layout.gutter / 2,
    justifyContent: "center",
  },
  topList: {
    height: 8,
    width: "100%",
    borderRadius: layout.radius,
    backgroundColor: hexToRGB(palette.text, 0.1),
  },
  bottomList: {
    width: "60%",
  },
}));
