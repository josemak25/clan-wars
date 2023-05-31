/**
 *
 * @description getLogoSize a method for getting user select logo size
 * @function getLogoSize
 * @property image {string}
 * @returns number
 */

export const getLogoSize = (image: string, fileSize?: number): number => {
  let y = 1;

  if (image.endsWith("==")) {
    y = 2;
  }

  const x_size = fileSize || image.length * (3 / 4) - y;
  const size = x_size / 1024;
  return Number(size.toFixed(2));
};
