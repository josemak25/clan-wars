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

  phone_required: {
    id: "form.validator.phone_required",
    defaultMessage: "Phone is required",
  },

  clan_name_required: {
    id: "form.validator.clan_name_required",
    defaultMessage: "Clan is required",
  },

  team_name_required: {
    id: "form.validator.team_name_required",
    defaultMessage: "Team name is required",
  },

  player_ign_required: {
    id: "form.validator.player_ign_required",
    defaultMessage: "Player ign is required",
  },

  avatar_required: {
    id: "form.validator.avatar_required",
    defaultMessage: "Player avatar is required",
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

  const phoneValidation = {
    required: {
      value: true,
      message: intl.formatMessage(messages.phone_required),
    },
  };

  const clanNameValidation = {
    required: {
      value: true,
      message: intl.formatMessage(messages.clan_name_required),
    },
  };

  const avatarValidation = {
    required: {
      value: true,
      message: intl.formatMessage(messages.avatar_required),
    },
  };

  const playerIgnValidation = {
    required: {
      value: true,
      message: intl.formatMessage(messages.player_ign_required),
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
    phoneValidation,
    emailValidation,
    avatarValidation,
    clanLogoValidation,
    clanNameValidation,
    teamNameValidation,
    playerIgnValidation,
  };
};
