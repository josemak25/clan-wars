import { useState } from "react";
import ImagePicker from "expo-image-picker";

import { generateId } from "../helpers";

export const useLogoUpload = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const cancelUpload = () => setIsLoading(false);

  const httpRequest = (fileSize: number) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (e) => {
      if (e.loaded <= fileSize) {
        const percent = Math.round((e.loaded / fileSize) * 100);
        setProgress(percent);
      }

      if (e.loaded == e.total) {
        setIsComplete(!isComplete);
      }
    });

    return xhr;
  };

  const uploadLogo = async (file: ImagePicker.ImagePickerAsset) => {
    try {
      if (!file.uri || !file.fileSize) {
        return;
      }

      setIsLoading(true);
      const xhr = httpRequest(file.fileSize);

      // const image = await uploadFile(
      //   { ...file, fileName: `${generateId()}` },
      //   { xhr }
      // );

      console.log("======SUCCESSFUL=========");
      // console.log({ image });
      console.log("======SUCCESSFUL=========");
    } catch (error) {
      setIsLoading(false);
      console.log("======ERROR=========");
      console.log(error);
      console.log("======ERROR=========");
    } finally {
      setIsLoading(true);
    }
  };

  return {
    progress,
    isLoading,
    isComplete,
    uploadLogo,
    cancelUpload,
  };
};
