import React, { useEffect } from "react";
import { PAY_STACK_PUBLIC_KEY } from "@env";
import { usePaystackPayment } from "react-paystack";

import {
  ITournament,
  ITournamentClan,
} from "../../providers/store/reducers/tournament/interfaces";

type PaymentModalProps = {
  reference: string;
  isVisible: boolean;
  onClose: () => void;
  onSuccess: () => void;
  clan: ITournamentClan | null;
  selectedTournament: ITournament | null;
};

export const PaymentModal: React.FC<PaymentModalProps> = ({
  clan,
  onClose,
  isVisible,
  onSuccess,
  reference,
  selectedTournament,
}) => {
  const initializePayment = usePaystackPayment({
    reference,
    publicKey: PAY_STACK_PUBLIC_KEY,
    email: clan?.email_address!,
    channels: ["bank_transfer", "card", "mobile_money", "bank", "ussd", "qr"],
    amount: Number(selectedTournament?.registration_fee!) * 100, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  });

  useEffect(() => {
    if (clan && isVisible && reference) {
      initializePayment(onSuccess, onClose);
    }
  }, [clan, reference, isVisible]);

  return null;
};
