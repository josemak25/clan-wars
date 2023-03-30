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

  password_required: {
    id: "form.validator.password_required",
    defaultMessage: "Password is required",
  },

  player_id_required: {
    id: "form.validator.player_id_required",
    defaultMessage: "PlayerID is required",
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

  const passwordValidation = {
    required: {
      value: true,
      message: intl.formatMessage(messages.password_required),
    },
  };

  const playerIdValidation = {
    required: {
      value: true,
      message: intl.formatMessage(messages.player_id_required),
    },
  };

  return { emailValidation, passwordValidation, playerIdValidation };
};
