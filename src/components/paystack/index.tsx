import React, { useEffect, useRef } from "react";
import { PAY_STACK_PUBLIC_KEY } from "@env";
import { Paystack, paystackProps } from "react-native-paystack-webview";

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
  const paystackRef = useRef<paystackProps.PayStackRef>(null);

  useEffect(() => {
    if (clan) {
      paystackRef.current?.startTransaction();
    }
  }, [clan]);

  return (
    <Paystack
      // @ts-ignore
      ref={paystackRef}
      onCancel={onClose}
      onSuccess={onSuccess}
      refNumber={generateId()}
      paystackKey={PAY_STACK_PUBLIC_KEY}
      billingEmail={clan?.contact_email_address!}
      amount={selectedTournament?.registration_fee!}
      channels={["bank_transfer", "card", "mobile_money", "bank", "ussd", "qr"]}
    />
  );
};
