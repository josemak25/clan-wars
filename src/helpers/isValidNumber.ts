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
    const region = phoneUtil.getRegionCodeForNumber(parsedNumber);
    console.log({ parsedNumber, region });
    return phoneUtil.isValidNumber(parsedNumber);
  } catch (err) {
    console.log({ err });
    return false;
  }
};
