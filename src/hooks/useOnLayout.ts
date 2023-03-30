import { useState } from "react";
import { LayoutChangeEvent, LayoutRectangle } from "react-native";

export const useOnLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle>();

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setLayout(nativeEvent.layout);
  };

  return [layout, onLayout] as const;
};
