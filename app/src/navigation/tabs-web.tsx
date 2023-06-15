import React, { useEffect, useRef } from "react";
import { shallowEqual } from "react-redux";
import { useTheme } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

import { TabNavigator } from "./tabs";
import { useDispatch, useSelector } from "../hooks";
import { settingsActions } from "../providers/store/reducers";
import { BottomSheetBackdrop } from "../components/modal-backdrop";

const snapPoints = ["85%"];

export const WebTabs = () => {
  const dispatch = useDispatch();
  const { palette, layout, breakpoints } = useTheme();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { isDetailModalVisible } = useSelector(
    ({ settings }) => settings,
    shallowEqual
  );

  const onClose = () => dispatch(settingsActions.toggleDetailModalVisibility());

  const BackdropComponent = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} closeModal={onClose} />
  );

  useEffect(() => {
    if (isDetailModalVisible) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isDetailModalVisible]);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleComponent={() => null}
      enablePanDownToClose={false}
      backdropComponent={BackdropComponent}
      backgroundStyle={{ backgroundColor: palette.background }}
      style={{
        margin: "auto",
        overflow: "hidden",
        borderRadius: layout.radius,
        maxWidth: breakpoints.tablet_viewport - 63,
      }}
    >
      <BottomSheetView style={{ flex: 1 }}>
        <NavigationContainer independent>
          <TabNavigator />
        </NavigationContainer>
      </BottomSheetView>
    </BottomSheetModal>
  );
};
