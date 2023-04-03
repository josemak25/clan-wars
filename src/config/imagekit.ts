import ImageKit from "imagekit-javascript";

import { IMAGE_KIT_PUBLIC_URL, IMAGE_KIT_ENDPOINT_URL } from "@env";

export const imagekit = new ImageKit({
  publicKey: IMAGE_KIT_PUBLIC_URL,
  urlEndpoint: IMAGE_KIT_ENDPOINT_URL,
});
