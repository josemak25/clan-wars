import React, { useEffect, useMemo, useRef } from "react";
import { useTheme } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { shallowEqual } from "react-redux";
import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

import { TabNavigator } from "./tabs";
import { RootState } from "../providers/store/store";
import { settingsActions } from "../providers/store/reducers";
import { BottomSheetBackdrop } from "../components/modal-backdrop";
import { useDispatch, useResponsiveScreen, useSelector } from "../hooks";

export const WebTabs = () => {
  const dispatch = useDispatch();
  const { isMinScreenSize } = useResponsiveScreen();
  const enablePanDownToClose = isMinScreenSize(1024);
  const { palette, layout, breakpoints } = useTheme();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(
    () => [enablePanDownToClose ? "90%" : "85%"],
    [enablePanDownToClose]
  );

  const { isDetailModalVisible } = useSelector(
    ({ settings }: RootState) => settings,
    shallowEqual
  );

  const onClose = () => {
    bottomSheetRef.current?.close();
    dispatch(settingsActions.toggleDetailModalVisibility());
  };

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
      backdropComponent={BackdropComponent}
      enablePanDownToClose={enablePanDownToClose}
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
