/**
 *
 * @description A function that helps to group and array into chunks
 * @function chunk
 * @param Array<any> array
 * @param number chunkSize
 * @returns Array<any>
 */

export const chunk = <T>(array: Array<T>, chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
};
