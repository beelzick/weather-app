const roundMinutes = (date) => (date.getMinutes() >= 30 ? date.getHours() + 1 : date.getHours())

export default roundMinutes
