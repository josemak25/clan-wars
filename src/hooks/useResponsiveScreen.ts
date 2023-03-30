import React, { PropsWithChildren, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

import { BREAK_POINTS } from "../providers/theme/style";

export function useResponsiveScreen() {
  const isSmallMobile = useMediaQuery({
    maxWidth: BREAK_POINTS.SMALL_MOBILE - 1,
  });

  const isMobileOrTablet = useMediaQuery({
    minWidth: BREAK_POINTS.SMALL_MOBILE,
    maxWidth: BREAK_POINTS.DESKTOP_VIEWPORT - 1,
  });

  const isDesktopOrLaptop = useMediaQuery({
    minWidth: BREAK_POINTS.DESKTOP_VIEWPORT,
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
