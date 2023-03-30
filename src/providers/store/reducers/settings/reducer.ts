import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Locale, SwitchScreen, IColorMode, ISettingsState } from "./interfaces";

export const SETTINGS_SLICE_NAME = "settings";

const initialState: ISettingsState = {
  locale: Locale.ENGLISH,
  isProfileInfoVisible: false,
  colorMode: IColorMode.LIGHT,
  isReceiveNotifications: true,
  isPlayerIdInfoVisible: false,
  isWalletBalanceVisible: true,
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

      togglePlayerIdInfoModal: (state) => {
        state.isPlayerIdInfoVisible = !state.isPlayerIdInfoVisible;
      },

      toggleProfileInfoModal: (state) => {
        state.isProfileInfoVisible = !state.isProfileInfoVisible;
      },

      toggleReceiveNotifications: (state) => {
        state.isReceiveNotifications = !state.isReceiveNotifications;
      },

      toggleWalletBalanceVisibility: (state) => {
        state.isWalletBalanceVisible = !state.isWalletBalanceVisible;
      },

      changeScreen: (state, action: PayloadAction<SwitchScreen>) => {
        state.screen = action.payload;
      },
    },
  });
