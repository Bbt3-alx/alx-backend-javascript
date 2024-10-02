export default function appendToEachArrayValue(array, appendString) {
    for (let element of array) {
      let value = element;
      array[element] = appendString + value;
    }
  
    return array;
}
