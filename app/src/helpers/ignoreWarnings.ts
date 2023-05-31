import { LogBox } from "react-native";

const ignoreWarns = [
  "ViewPropTypes will be removed from React Native",
  "(ADVICE) View #7943 of type ABI48_0_0RCTView has a shadow set",
];

const warn = console.warn;

console.warn = (...arg) => {
  for (const warning of ignoreWarns) {
    if (arg[0].startsWith(warning)) {
      return;
    }
  }
  warn(...arg);
};

LogBox.ignoreLogs(ignoreWarns);
