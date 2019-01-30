import formatNumber from '@/libs/formatNumber'

export default {
  props: {
    amount: Number
  },
  computed: {
    formattedAmount: function () {
      return formatNumber(this.amount)
    }
  }
}
