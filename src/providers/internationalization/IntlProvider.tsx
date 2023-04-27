import React, { PropsWithChildren } from "react";
import dayjs from "dayjs";
import { shallowEqual } from "react-redux";
import { IntlShape, IntlProvider as BaseIntlProvider } from "react-intl";

import "intl";
import "dayjs/locale/fr";
import "dayjs/locale/en-gb";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import { useSelector } from "../../hooks";
import { LANGUAGE_DEFAULT } from "../../constants";
import { Locale } from "../store/reducers/settings/interfaces";

export let translator = {} as IntlShape;

const messages: Record<Locale, {}> = { en, fr, es };

export const IntlProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { locale } = useSelector(({ settings }) => settings, shallowEqual);

  dayjs.locale(locale);

  return (
    <BaseIntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale={LANGUAGE_DEFAULT}
    >
      {children}
    </BaseIntlProvider>
  );
};
