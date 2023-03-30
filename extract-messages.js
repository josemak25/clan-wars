const fs = require("fs");
const glob = require("glob");
const colors = require("colors/safe");
const parser = require("typescript-react-intl").default;
const translate = require("@vitalets/google-translate-api");

const DEFAULT_LANGUAGES = { FRENCH: "fr", ENGLISH: "en" };

// CHANGE THE DEFAULT_LANGUAGES SHOULD YOU WANT TO CONVERT TO ANOTHER LOCAL
const LOCAL_YOU_WANT_TO_TRANSLATE_TO = DEFAULT_LANGUAGES.FRENCH;
const DEFAULT_MESSAGES_FOLDER = `src/providers/internationalization/locales`;

const getAppExistingLocals = () => {
  const locales = Object.values(DEFAULT_LANGUAGES).reduce(
    (languages, language) => {
      languages[
        language
      ] = require(`./src/providers/internationalization/locales/${language}.json`);
      return languages;
    },
    {}
  );

  return locales;
};

const extractNewLocals = (res, defaultLocales) => {
  const locale = res.reduce((messages, message) => {
    if (!defaultLocales[DEFAULT_LANGUAGES.ENGLISH][message.id]) {
      messages[message.id] = message.defaultMessage;
    }
    return messages;
  }, {});

  return locale;
};

const runnerScript = (pattern, callback) => {
  glob(pattern, (err, files) => {
    if (err) throw new Error(err);
    const results = [];

    files.forEach((file) => {
      const contents = fs.readFileSync(file).toString();
      const parsed = parser(contents);
      results.push(...parsed);
    });

    callback?.(results);
  });
};

// TODO: don’t override existing modified messages
runnerScript("src/**/messages.@(ts)", (res) => {
  const DEFAULT_LOCALS = getAppExistingLocals();
  const extractedLocale = extractNewLocals(res, DEFAULT_LOCALS);
  const locales = Object.entries(extractedLocale);

  if (locales.length) {
    const request = locales.map(([key, text]) =>
      translate(text, {
        textId: key,
        from: DEFAULT_LANGUAGES.ENGLISH,
        to: LOCAL_YOU_WANT_TO_TRANSLATE_TO,
      })
    );

    Promise.all(request)
      .then((response) => {
        const translated = response.reduce((trans, result) => {
          trans[result.textId] = result.text;
          return trans;
        }, {});

        // SPREADING TRANSLATED RESPONSE FIRST HELPS PREVENT MANUAL CHANGES ON LOCAL FILES
        const translated_local = {
          ...translated,
          ...DEFAULT_LOCALS[LOCAL_YOU_WANT_TO_TRANSLATE_TO],
        };

        fs.writeFileSync(
          `${DEFAULT_MESSAGES_FOLDER}/${LOCAL_YOU_WANT_TO_TRANSLATE_TO}.json`,
          `${JSON.stringify(translated_local, null, 2)}\r`
        );

        // SET THE NEW EXTRACTED CLEAN ENGLISH TRANSLATION BACK FOR SUBSEQUENT COMPARISON
        const new_english_local = {
          ...DEFAULT_LOCALS[DEFAULT_LANGUAGES.ENGLISH],
          ...extractedLocale,
        };

        fs.writeFileSync(
          `${DEFAULT_MESSAGES_FOLDER}/${DEFAULT_LANGUAGES.ENGLISH}.json`,
          `${JSON.stringify(new_english_local, null, 2)}\r`
        );

        console.log(colors.blue("Translation done successfully 🚀🥳"));
      })
      .catch(console.error);
  } else {
    console.log(colors.yellow("No new locales to translate 😞"));
  }
});
