import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Locale, SwitchScreen, IColorMode, ISettingsState } from "./interfaces";

export const SETTINGS_SLICE_NAME = "settings";

const initialState: ISettingsState = {
  locale: Locale.ENGLISH,
  colorMode: IColorMode.LIGHT,
  isDetailModalVisible: false,
  isReceiveNotifications: true,
  screen: SwitchScreen.UNAUTHENTICATED_SCREENS,
};

export const { reducer: settingsReducer, actions: settingsActions } =
  createSlice({
    initialState,
    name: SETTINGS_SLICE_NAME,
    reducers: {
      changeColorMode: (state, action: PayloadAction<IColorMode>) => {
        state.colorMode = action.payload;
      },

      changeLocale: (state, action: PayloadAction<Locale>) => {
        state.locale = action.payload;
      },

      toggleReceiveNotifications: (state) => {
        state.isReceiveNotifications = !state.isReceiveNotifications;
      },

      toggleDetailModalVisibility: (state) => {
        state.isDetailModalVisible = !state.isDetailModalVisible;
      },

      changeScreen: (state, action: PayloadAction<SwitchScreen>) => {
        state.screen = action.payload;
      },
    },
  });
