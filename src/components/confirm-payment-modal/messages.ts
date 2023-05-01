import { defineMessages } from "react-intl";

const messages = defineMessages({
  title: {
    id: "confirm_payment_modal.title",
    defaultMessage: "Tournament fees",
  },
  subtitle: {
    id: "confirm_payment_modal.subtitle",
    defaultMessage: "Confirm",
  },
  info: {
    id: "confirm_payment_modal.info",
    defaultMessage: `This is a paid tournament and requires all participates to pay a one time registration fee, the payment qualifies you to be able to play the this tournament.`,
  },
  total_amount: {
    id: "confirm_payment_modal.total_amount",
    defaultMessage: "Total Amount",
  },
  others: {
    id: "confirm_payment_modal.others",
    defaultMessage: "{num} others",
  },
  and: {
    id: "confirm_payment_modal.and",
    defaultMessage: "and",
  },
});

export default messages;
