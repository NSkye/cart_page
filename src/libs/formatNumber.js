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
