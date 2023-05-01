import { useMemo, useState } from "react";
import { shallowEqual } from "react-redux";
import { ImagePickerAsset } from "expo-image-picker";

import { uploadFile } from "../config/network";
import { useSelector, useDispatch } from "./store";
import { settingsActions } from "../providers/store/reducers";

export const useLogoUpload = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { isLogoUploadCompleted } = useSelector(
    ({ settings }) => settings,
    shallowEqual
  );

  const cancelUpload = () => setIsLoading(false);

  const onProgress: XMLHttpRequestEventTarget["onprogress"] = (progress) => {
    const percentage = Math.floor((progress.loaded / progress.total) * 100);
    setProgress(Number(percentage));
  };

  const uploadLogo = async (
    file: ImagePickerAsset & { extension: string }
  ): Promise<string> => {
    dispatch(settingsActions.toggleIsLogoUploadCompleted(false));
    setIsLoading(true);
    const image_url = await uploadFile(file, onProgress);
    dispatch(settingsActions.toggleIsLogoUploadCompleted(true));
    setIsLoading(false);
    return image_url;
  };

  return useMemo(
    () => ({
      progress,
      isLoading,
      uploadLogo,
      cancelUpload,
      isComplete: isLogoUploadCompleted,
    }),
    [progress, isLoading, isLogoUploadCompleted, uploadLogo, cancelUpload]
  );
};
