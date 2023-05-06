import { defineMessages } from "react-intl";

const messages = defineMessages({
  title: {
    id: "success_modal.title",
    defaultMessage: "Registration success",
  },
  subtitle: {
    id: "success_modal.subtitle",
    defaultMessage: `This is a paid tournament and requires all participates to pay a one time registration fee, the payment qualifies you to be able to play the this tournament.`,
  },
  close: {
    id: "success_modal.close",
    defaultMessage: "Close",
  },
});

export default messages;
