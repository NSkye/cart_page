export default {
  props: {
    amount: Number
  },
  computed: {
    formattedAmount: function () {
      return this.amount <= 0 ? '0' : String(this.amount)
        .split('')
        .reverse()
        .map((v, i) => !(i % 3) ? v + ' ' : v)
        .reverse()
        .join('')
    }
  }
}
