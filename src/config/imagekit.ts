import { Platform } from "react-native";
import ImageKit from "imagekit-javascript";

if (Platform.OS !== "web") {
  require("react-native-url-polyfill/auto");
}

import { IMAGE_KIT_PUBLIC_URL, IMAGE_KIT_ENDPOINT_URL } from "@env";

export const imagekit = new ImageKit({
  publicKey: IMAGE_KIT_PUBLIC_URL,
  urlEndpoint: IMAGE_KIT_ENDPOINT_URL,
});
