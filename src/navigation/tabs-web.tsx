import React, { useEffect, useRef } from "react";
import { useTheme } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { shallowEqual } from "react-redux";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

import { TabNavigator } from "./tabs";
import { useDispatch, useSelector } from "../hooks";
import { RootState } from "../providers/store/store";
import { settingsActions } from "../providers/store/reducers";
import { BottomSheetBackdrop } from "../components/modal-backdrop";

const snapPoints = ["95%"];

export const WebTabs = () => {
  const dispatch = useDispatch();
  const { palette, layout } = useTheme();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { isDetailModalVisible } = useSelector(
    ({ settings }: RootState) => settings,
    shallowEqual
  );

  const onClose = () => bottomSheetRef.current?.close();

  const BackdropComponent = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} closeModal={onClose} />
  );

  useEffect(() => {
    isDetailModalVisible && bottomSheetRef.current?.expand();
  }, [isDetailModalVisible]);

  if (!isDetailModalVisible) {
    return null;
  }

  return (
    <BottomSheet
      index={0}
      enablePanDownToClose
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleComponent={() => null}
      backdropComponent={BackdropComponent}
      containerHeight={layout.screen.height}
      onClose={() => dispatch(settingsActions.toggleDetailModalVisibility())}
      style={{
        maxWidth: 705,
        margin: "auto",
        overflow: "hidden",
        borderRadius: layout.radius,
      }}
      backgroundStyle={{ backgroundColor: palette.background }}
    >
      <BottomSheetView style={{ flex: 1 }}>
        <NavigationContainer independent>
          <TabNavigator />
        </NavigationContainer>
      </BottomSheetView>
    </BottomSheet>
  );
};
