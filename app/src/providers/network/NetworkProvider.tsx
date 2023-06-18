import React, { useState, Fragment, useEffect, PropsWithChildren } from "react";
import NetInfo, { NetInfoStateType } from "@react-native-community/netinfo";
import DEFAULT_CONFIGURATION from "@react-native-community/netinfo/src/internal/defaultConfiguration";

import { useIsMounted } from "../../hooks";
import { FallbackScreen } from "../../components/fallback";

NetInfo.configure({
  ...DEFAULT_CONFIGURATION,
  reachabilityUrl: "https://httpbin.org/ip",
  reachabilityTest: (response: Response): Promise<boolean> =>
    Promise.resolve(response.ok && response.status === 200),
});

export const NetworkProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const isMounted = useIsMounted();
  const [isVisible, setIsVisible] = useState(false);
  const [isOffline, setOfflineStatus] = useState(false);

  const onRetry = async () => {
    const netInfo = await NetInfo.refresh();
    const offline =
      !netInfo.isConnected &&
      !netInfo.isInternetReachable &&
      netInfo.type !== NetInfoStateType.none;

    setOfflineStatus(offline);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((netInfo) => {
      const offline =
        !netInfo.isConnected &&
        !netInfo.isInternetReachable &&
        netInfo.type !== NetInfoStateType.none;

      setOfflineStatus(offline);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isVisible !== isOffline && isMounted()) {
        setIsVisible(isOffline);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOffline, isMounted]);

  return (
    <Fragment>
      {children}
      <FallbackScreen
        icon="network"
        resetError={onRetry}
        isVisible={isVisible}
        title="no_network_title"
        subtitle="no_network_subtitle"
        error={new Error("No internet connection")}
      />
    </Fragment>
  );
};
