export const getCommonPart = (string, query) => {
  let commonPart = ''

  for (let i = 0; i < query.length; i++) {
    if (string[i] === query[i]) {
      commonPart += string[i]
    } else {
      return commonPart
    }
  }

  return commonPart
}
