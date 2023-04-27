/**
 *
 * @description getUniqueId a method for getting device uniqueId
 * @function getUniqueId
 * @returns string
 */

import { Platform } from "react-native";
import * as Application from "expo-application";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { APP_NAME } from "../constants";
import { generateId } from "./generateId";

export const getUniqueId = (): Promise<string> => {
  const uniqueIdStorageKey = `${APP_NAME}-visitorId`;

  return new Promise((resolve) => {
    Platform.select({
      android: () => resolve(Application.androidId!),
      web: async () => {
        let uniqueId = await AsyncStorage.getItem(uniqueIdStorageKey);

        if (!uniqueId) {
          const FingerprintJS = require("@fingerprintjs/fingerprintjs");
          const fp = await FingerprintJS.load();
          const visitor = await fp.get();
          uniqueId = visitor.visitorId;
          await AsyncStorage.setItem(uniqueIdStorageKey, uniqueId!);
        }

        return resolve(uniqueId!);
      },
      default: async () => {
        let uniqueId = await SecureStore.getItemAsync(uniqueIdStorageKey);

        if (!uniqueId) {
          uniqueId = generateId();
          await SecureStore.setItemAsync(uniqueIdStorageKey, uniqueId);
        }

        return resolve(uniqueId);
      },
    })();
  });
};
