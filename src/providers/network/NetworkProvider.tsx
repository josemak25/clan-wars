import React, { useState, Fragment, useEffect, PropsWithChildren } from "react";
import NetInfo from "@react-native-community/netinfo";

import { FallbackScreen } from "../../components/fallback";

export const NetworkProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOffline, setOfflineStatus] = useState(false);

  const onRetry = async () => {
    const netInfo = await NetInfo.refresh();
    const offline = !(netInfo.isConnected && netInfo.isInternetReachable);
    setOfflineStatus(offline);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((netInfo) => {
      const offline = !(netInfo.isConnected && netInfo.isInternetReachable);
      setOfflineStatus(offline);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isVisible !== isOffline) {
        setIsVisible(isOffline);
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOffline]);

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
