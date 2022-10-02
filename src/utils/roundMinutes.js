const roundMinutes = (date) => {
  const hours = (date.getMinutes() >= 30 ? date.getHours() + 1 : date.getHours()).toString()
  return hours[1] ? hours : `0${hours}`
}

export default roundMinutes
