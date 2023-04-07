import { IMAGE_KIT_ENDPOINT_URL } from "@env";
import ImagePicker from "expo-image-picker";
import { imagekit } from "../config/imagekit";
import { UrlOptions, UploadOptions } from "imagekit-javascript/src/interfaces";

type DirectoryType = "clan_logo" | "tournament_cover" | "player_avatar";

export const getImagekitUrlFromPath = ({
  directory,
  ...options
}: UrlOptions & { directory: DirectoryType }) => {
  const urlEndpoint = `${IMAGE_KIT_ENDPOINT_URL}/${directory}`;
  const imageUrl = imagekit.url({ ...options, urlEndpoint });
  return imageUrl;
};

export const getImagekitUrl = (
  path: string,
  { directory, quality = 70 }: { quality?: number; directory: DirectoryType }
) => {
  const url = getImagekitUrlFromPath({
    directory,
    path: `/${path}`,
    transformation: [{ quality: `${quality}`, radius: "10" }],
  });

  const preview = getImagekitUrlFromPath({
    directory,
    path: `/${path}`,
    transformation: [
      {
        blur: "10",
        quality: `${quality / 5}`,
        radius: directory === "clan_logo" ? "max" : "10",
      },
    ],
  });

  return { url, preview };
};

export const uploadFile = (
  file: ImagePicker.ImagePickerAsset,
  options: Partial<UploadOptions>
) => {
  return imagekit.upload({
    ...options,
    file: file.uri,
    folder: "/clan_log",
    fileName: file.fileName!,
    tags: ["CODM", "mobile gaming"],
    extensions: [
      {
        maxTags: 10,
        minConfidence: 80,
        name: "aws-auto-tagging",
      },
    ],
  });
};
