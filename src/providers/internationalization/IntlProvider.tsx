import React, { PropsWithChildren } from "react";
import dayjs from "dayjs";
import { shallowEqual } from "react-redux";
import {
  IntlShape,
  createIntl,
  createIntlCache,
  RawIntlProvider,
} from "react-intl";

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

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

const messages: Record<Locale, {}> = { en, fr, es };

export const IntlProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { locale } = useSelector(({ settings }) => settings, shallowEqual);
  dayjs.locale(locale);

  translator = createIntl(
    { locale, defaultLocale: LANGUAGE_DEFAULT, messages: messages[locale] },
    cache
  );

  return <RawIntlProvider value={translator}>{children}</RawIntlProvider>;
};
