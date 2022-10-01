export const getCommonPart = (string, query) => {
  // Find common part of two string
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

export const formatDatetime = (date) => {
  const formattedDate = date.split(':').slice(0, 2).join(':')
  return formattedDate[0] === '0' ? formattedDate.slice(1) : formattedDate
}

export const capitalize = (string) => string[0].toUpperCase() + string.slice(1)
