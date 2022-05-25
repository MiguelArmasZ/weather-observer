/* eslint-disable space-before-function-paren */
export function intlClock(timeZone) {
  const time = new Date()
    .toLocaleString('es-ES', { timeZone })
    .split(',')
    .slice(-1)
    .join('')

  return time
}
