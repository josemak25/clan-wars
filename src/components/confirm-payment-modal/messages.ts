import { defineMessages } from "react-intl";

const messages = defineMessages({
  title: {
    id: "confirm_payment_modal.title",
    defaultMessage: "Confirm payment",
  },
  subtitle: {
    id: "confirm_payment_modal.subtitle",
    defaultMessage: "Pay the sum of {amount} to participate on this tournament",
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
