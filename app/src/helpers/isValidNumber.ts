import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

/**
 *
 * @description hexToRGB a method for converting hex colors to rgb and rgba colors
 * @function isValidNumber
 * @property hexColor {string}
 * @property alpha {number}
 * @returns string
 */
export const isValidNumber = (number: string) => {
  try {
    const parsedNumber = phoneUtil.parse(number);
    return phoneUtil.isValidNumber(parsedNumber);
  } catch (err) {
    return false;
  }
};
