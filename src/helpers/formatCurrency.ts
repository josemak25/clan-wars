/**
 *
 * @description A function that helps format currency
 * @function formatCurrency
 * @returns string
 */

type FormatOptions = Partial<Intl.NumberFormatOptions> & {
  locale?: string;
};

export const formatCurrency = (
  amount: number,
  options?: FormatOptions
): string => {
  const locale = options?.locale || "en-US";
  const currency = options?.currency || "NGN";
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    minimumSignificantDigits: 1,
    ...options,
  });

  let converted = formatter.format(amount);

  if (converted.includes("NGN")) {
    converted = "₦" + converted.split("NGN")[1].trim();
  }

  return converted;
};
