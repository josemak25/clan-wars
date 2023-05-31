import { defineMessages } from "react-intl";

const messages = defineMessages({
  default_title: {
    id: "fallback.default_title",
    defaultMessage: "Oops, Something Went Wrong.",
  },
  no_network_title: {
    id: "fallback.no_network_title",
    defaultMessage: "Network error.",
  },
  no_network_subtitle: {
    id: "fallback.no_network_subtitle",
    defaultMessage: "Connect to the internet and try again.",
  },
  no_tournament_data_title: {
    id: "fallback.no_tournament_data_title",
    defaultMessage: "No tournaments",
  },
  no_participant_data_title: {
    id: "fallback.no_participants_data_title",
    defaultMessage: "No participants",
  },
  no_tournament_data_subtitle: {
    id: "fallback.no_tournament_data_subtitle",
    defaultMessage: `There are no tournaments at the moment {br} Please refresh to try again.`,
  },
  no_participant_data_subtitle: {
    id: "fallback.no_participant_data_subtitle",
    defaultMessage: `There are no participants at the moment {br} Please refresh to try again.`,
  },
  fetching_data_subtitle: {
    id: "fallback.fetching_data_subtitle",
    defaultMessage: "Sorry about that! Please try again later.",
  },
  default_subtitle: {
    id: "fallback.default_subtitle",
    defaultMessage: `The app ran into a problem and could not continue. We apologize for
    any inconvenience this has caused! Press the button below to restart
    the app. Please contact us if this issue persists.`,
  },
  default_button_text: {
    id: "fallback.default_button_text",
    defaultMessage: "Try again",
  },
});

export default messages;
