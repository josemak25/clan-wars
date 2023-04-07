import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";

import {
  settingsReducer,
  tournamentReducer,
  SETTINGS_SLICE_NAME,
  TOURNAMENT_SLICE_NAME,
} from "./reducers";
import { APP_VERSION, __ROOT_REDUX_STATE_KEY__ } from "../../constants";

const persistConfig = {
  version: APP_VERSION,
  storage: AsyncStorage,
  key: __ROOT_REDUX_STATE_KEY__,
};

const reactotronEnhancer = (): any => {
  const enhancers = [];

  if (__DEV__) {
    const { reactotron } = require("../../config/reactotron");
    enhancers.push(reactotron.createEnhancer());
  }

  return enhancers;
};

const rootReducer = combineReducers({
  [SETTINGS_SLICE_NAME]: settingsReducer,
  [TOURNAMENT_SLICE_NAME]: tournamentReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: __DEV__,
  reducer: persistedReducer,
  enhancers: [...reactotronEnhancer()],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// TODO: remove all this call it's only used here for testing
persistor.purge();
persistor.flush();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {settings: SettingsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
