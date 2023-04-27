import { useMemo, useRef, useState } from "react";
import { ImagePickerAsset } from "expo-image-picker";

import { uploadFile } from "../config/network";

export const useLogoUpload = () => {
  const isComplete = useRef(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const cancelUpload = () => setIsLoading(false);

  const onProgress: XMLHttpRequestEventTarget["onprogress"] = (progress) => {
    const percentage = Math.floor((progress.loaded / progress.total) * 100);
    setProgress(Number(percentage));
  };

  const uploadLogo = async (
    file: ImagePickerAsset & { extension: string }
  ): Promise<string> => {
    isComplete.current = false;
    setIsLoading(true);
    const image_url = await uploadFile(file, onProgress);
    isComplete.current = true;
    setIsLoading(false);
    return image_url;
  };

  return useMemo(
    () => ({
      progress,
      isLoading,
      uploadLogo,
      cancelUpload,
      isComplete: isComplete.current,
    }),
    [progress, isLoading, isComplete, uploadLogo, cancelUpload]
  );
};
