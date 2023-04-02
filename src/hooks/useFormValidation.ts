import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  email_required: {
    id: "form.validator.email_required",
    defaultMessage: "Email is required",
  },

  email_valid: {
    id: "form.validator.email_valid",
    defaultMessage: "Enter a valid email address",
  },

  clan_name_required: {
    id: "form.validator.clan_name_required",
    defaultMessage: "Clan is required",
  },

  team_name_required: {
    id: "form.validator.team_name_required",
    defaultMessage: "Team name is required",
  },

  clan_log_required: {
    id: "form.validator.clan_log_required",
    defaultMessage: "Clan logo is required",
  },
});

export const useFormValidation = () => {
  const intl = useIntl();

  const emailValidation = {
    required: {
      value: true,
      message: intl.formatMessage(messages.email_required),
    },

    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
      message: intl.formatMessage(messages.email_valid),
    },
  };

  const clanNameValidation = {
    required: {
      value: true,
      message: intl.formatMessage(messages.clan_name_required),
    },
  };

  const teamNameValidation = {
    required: {
      value: true,
      message: intl.formatMessage(messages.team_name_required),
    },
  };

  const clanLogoValidation = {
    required: {
      value: true,
      message: intl.formatMessage(messages.clan_log_required),
    },
  };

  return {
    emailValidation,
    clanLogoValidation,
    clanNameValidation,
    teamNameValidation,
  };
};
