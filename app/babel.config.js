module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: [
      "module:react-native-dotenv",
      ["react-native-reanimated/plugin", { relativeSourceLocation: true }],
      [
        "formatjs",
        {
          idInterpolationPattern: "[sha512:contenthash:base64:6]",
          ast: true,
        },
      ],
    ],
  };
};
