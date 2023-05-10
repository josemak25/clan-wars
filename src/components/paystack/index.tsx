import React, { useEffect, useRef } from "react";
import { PAY_STACK_PUBLIC_KEY } from "@env";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { SuccessResponse } from "react-native-paystack-webview/lib/types";

import {
  ITournament,
  ITournamentClan,
} from "../../providers/store/reducers/tournament/interfaces";

type PaymentModalProps = {
  reference: string;
  isVisible: boolean;
  onClose: () => void;
  clan: ITournamentClan | null;
  selectedTournament: ITournament | null;
  onSuccess: (response: SuccessResponse) => void;
};

export const PaymentModal: React.FC<PaymentModalProps> = ({
  clan,
  onClose,
  isVisible,
  onSuccess,
  reference,
  selectedTournament,
}) => {
  const paystackRef = useRef<paystackProps.PayStackRef>(null);

  useEffect(() => {
    if (clan && reference && isVisible) {
      paystackRef.current?.startTransaction();
    }
  }, [clan, reference, isVisible]);

  return (
    <Paystack
      // @ts-ignore
      ref={paystackRef}
      onCancel={onClose}
      onSuccess={onSuccess}
      refNumber={reference}
      paystackKey={PAY_STACK_PUBLIC_KEY}
      billingEmail={clan?.email_address!}
      amount={selectedTournament?.registration_fee!}
      channels={["bank_transfer", "card", "mobile_money", "bank", "ussd", "qr"]}
    />
  );
};
