/**
 *
 * @description getUniqueId a method for getting device uniqueId
 * @function getUniqueId
 * @returns string
 */

import { Platform } from "react-native";
import { generateId } from "./generateId";

export const getUniqueId = (): Promise<string> => {
  return new Promise((resolve) => {
    Platform.select({
      android: () => {
        const application = require("expo-application");
        return resolve(application.androidId);
      },
      web: async () => {
        const FingerprintJS = require("@fingerprintjs/fingerprintjs");
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        return resolve(visitorId);
      },
      default: async () => {
        const SecureStore = require("expo-secure-store");
        let uniqueId = await SecureStore.getItemAsync("uniqueId");

        if (!uniqueId) {
          uniqueId = generateId();
          await SecureStore.setItemAsync("uniqueId", uniqueId);
        }

        return resolve(uniqueId);
      },
    })();
  });
};
