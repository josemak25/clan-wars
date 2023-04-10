export enum IColorMode {
  DARK = "dark",
  LIGHT = "light",
}

export enum SwitchScreen {
  AUTHENTICATED_SCREENS = "AUTHENTICATED_SCREENS",
  UNAUTHENTICATED_SCREENS = "UNAUTHENTICATED_SCREENS",
}

export enum Locale {
  FRENCH = "fr",
  ENGLISH = "en",
  SPANISH = "es",
}

export interface ISettingsState {
  locale: Locale;
  screen: SwitchScreen;
  colorMode: IColorMode;
  isDetailModalVisible: boolean;
  isReceiveNotifications: boolean;
  isAddPlayerModalVisible: boolean;
}
