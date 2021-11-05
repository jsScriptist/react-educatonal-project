export const getArrayOfOrdinalNumbers = (startNumber, finishNumber) => {
    const result = []

    for (startNumber; startNumber <= finishNumber; startNumber++) {
      result.push(startNumber)
    }

    return result
}