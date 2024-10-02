export default function appendToEachArrayValue(array, appendString) {
  for (const element of array) {
    const value = element;
    array[element] = appendString + value;
  }

  return array;
}
