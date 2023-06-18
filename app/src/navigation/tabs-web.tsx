import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { shallowEqual } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { TabNavigator } from "./tabs";
import { makeUseStyles } from "../helpers";
import { settingsActions } from "../providers/store/reducers";
import { useDispatch, useResponsiveScreen, useSelector } from "../hooks";

export const WebTabs = () => {
  const dispatch = useDispatch();
  const { styles, colors } = useStyles();
  const { isDesktopOrLaptop } = useResponsiveScreen();

  const { isDetailModalVisible } = useSelector(
    ({ settings }) => settings,
    shallowEqual
  );

  const onClose = () => dispatch(settingsActions.toggleDetailModalVisibility());

  return (
    <Modal
      onBackdropPress={onClose}
      isVisible={isDetailModalVisible}
      backdropColor={colors.light.text}
      style={[styles.modal, { marginTop: isDesktopOrLaptop ? "10%" : "25%" }]}
    >
      <View style={styles.container}>
        <NavigationContainer independent>
          <TabNavigator />
        </NavigationContainer>
      </View>
    </Modal>
  );
};

const useStyles = makeUseStyles(({ layout, breakpoints }) => ({
  container: {
    flex: 1,
    width: "100%",
    margin: "auto",
    overflow: "hidden",
    borderTopLeftRadius: layout.radius,
    borderTopRightRadius: layout.radius,
    maxWidth: breakpoints.tablet_viewport - 63,
  },
  modal: {
    marginBottom: 0,
    marginHorizontal: 0,
  },
}));
