import React, { PropsWithChildren, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

import { BREAK_POINTS } from "../providers/theme/style";

export function useResponsiveScreen() {
  const isSmallMobile = useMediaQuery({
    maxWidth: BREAK_POINTS.small_mobile - 1,
  });

  const isMobileOrTablet = useMediaQuery({
    minWidth: BREAK_POINTS.small_mobile,
    maxWidth: BREAK_POINTS.desktop_viewport - 1,
  });

  const isDesktopOrLaptop = useMediaQuery({
    minWidth: BREAK_POINTS.desktop_viewport,
  });

  const Desktop: React.FC<PropsWithChildren> = useCallback(({ children }) => {
    return isDesktopOrLaptop ? (children as React.ReactElement) : null;
  }, []);

  const MobileOrTablet: React.FC<PropsWithChildren> = useCallback(
    ({ children }) => {
      return isSmallMobile || isMobileOrTablet
        ? (children as React.ReactElement)
        : null;
    },
    []
  );

  return {
    Desktop,
    isSmallMobile,
    MobileOrTablet,
    isMobileOrTablet,
    isDesktopOrLaptop,
  };
}
