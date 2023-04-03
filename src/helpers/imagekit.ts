import { IMAGE_KIT_ENDPOINT_URL } from "@env";
import { imagekit } from "../config/imagekit";
import { UrlOptions, UploadOptions } from "imagekit-javascript/src/interfaces";

type DirectoryType = "clan_logo" | "tournament_cover";

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
    transformation: [{ quality: `${quality}` }],
  });

  const preview = getImagekitUrlFromPath({
    directory,
    path: `/${path}`,
    transformation: [{ quality: `${quality / 5}` }],
  });

  return { url, preview };
};

export const uploadFile = (file: File, options: Partial<UploadOptions>) => {
  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        ...options,
        file,
        folder: "/clan_log",
        fileName: file.name,
        tags: ["CODM", "mobile gaming"],
        extensions: [
          {
            maxTags: 10,
            minConfidence: 80,
            name: "aws-auto-tagging",
          },
        ],
      },
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};
