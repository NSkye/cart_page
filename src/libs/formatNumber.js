/**
 * Приводит число к читаемому виду: 1000000 -> 1 000 000
 * @param {number} value
 */
export default function formatNumber (value = 0) {
  let sign = ''
  if (value < 0) {
    sign = '-'
    value = Math.abs(value)
  }

  return sign + String(value)
    .split('')
    .reverse()
    .map((v, i) => !(i % 3) ? v + ' ' : v)
    .reverse()
    .join('')
}
