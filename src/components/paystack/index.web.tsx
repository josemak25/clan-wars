import React, { useEffect } from "react";
import { PAY_STACK_PUBLIC_KEY } from "@env";
import { usePaystackPayment } from "react-paystack";

import { generateId } from "../../helpers";
import {
  ITournament,
  ITournamentClan,
} from "../../providers/store/reducers/tournament/interfaces";

type PaymentModalProps = {
  onClose: () => void;
  onSuccess: () => void;
  clan: ITournamentClan | null;
  selectedTournament: ITournament | null;
};

export const PaymentModal: React.FC<PaymentModalProps> = ({
  clan,
  onClose,
  onSuccess,
  selectedTournament,
}) => {
  const initializePayment = usePaystackPayment({
    reference: generateId(),
    publicKey: PAY_STACK_PUBLIC_KEY,
    email: clan?.contact_email_address!,
    amount: Number(selectedTournament?.registration_fee!),
    channels: ["bank_transfer", "card", "mobile_money", "bank", "ussd", "qr"],
  });

  useEffect(() => {
    if (clan) {
      initializePayment(onSuccess, onClose);
    }
  }, [clan]);

  return null;
};
