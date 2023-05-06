import React, { Fragment, PropsWithChildren, useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import DEFAULT_CONFIGURATION from "@react-native-community/netinfo/src/internal/defaultConfiguration";

import { FallbackScreen } from "../../components/fallback";

NetInfo.configure({
  ...DEFAULT_CONFIGURATION,
  reachabilityUrl: "https://randomuser.me/api",
  reachabilityTest: async (response) => response.status === 200,
});

export const NetworkProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOffline, setOfflineStatus] = useState(false);

  const onRetry = async () => {
    const netInfo = await NetInfo.refresh();
    const offline = !(netInfo.isConnected && netInfo.isInternetReachable);
    setOfflineStatus(offline);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((netInfo) => {
      // console.log({ netInfo });
      const offline = !(netInfo.isConnected && netInfo.isInternetReachable);
      setOfflineStatus(offline);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isOffline ? (
    <FallbackScreen
      icon="network"
      resetError={onRetry}
      title="no_network_title"
      subtitle="no_network_subtitle"
      error={new Error("No internet connection")}
    />
  ) : (
    <Fragment>{children}</Fragment>
  );
};
