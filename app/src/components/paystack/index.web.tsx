import React, { useEffect } from "react";
import { PAY_STACK_PUBLIC_KEY } from "@env";
import { usePaystackPayment } from "react-paystack";
import { PaymentChannels } from "react-native-paystack-webview/lib/types";

import { ITournament } from "../../providers/store/reducers/tournament/interfaces";
import { ITournamentClan } from "../../providers/store/reducers/participants/interfaces";

type PaymentModalProps = {
  reference: string;
  isVisible: boolean;
  onClose: () => void;
  onSuccess: () => void;
  channels: PaymentChannels[];
  clan: ITournamentClan | null;
  selectedTournament: ITournament | null;
};

export const PaymentModal: React.FC<PaymentModalProps> = ({
  clan,
  onClose,
  channels,
  isVisible,
  onSuccess,
  reference,
  selectedTournament,
}) => {
  const initializePayment = usePaystackPayment({
    channels,
    reference,
    email: clan?.email_address!,
    publicKey: PAY_STACK_PUBLIC_KEY,
    amount: Number(selectedTournament?.registration_fee!) * 100, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  });

  useEffect(() => {
    if (clan && isVisible && reference) {
      initializePayment(onSuccess, onClose);
    }
  }, [clan, reference, isVisible]);

  return null;
};
