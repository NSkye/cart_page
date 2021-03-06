import formatNumber from '@/libs/formatNumber'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'intermediate'
    },
    color: {
      type: String,
      default: 'regular'
    },
    isFree: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formattedValue: function () {
      return formatNumber(this.value)
    }
  }
}
