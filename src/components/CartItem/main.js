import ColorDisplay from '@@/ColorDisplay'
import ImageDisplay from '@@/ImageDisplay'
import InfoBadge from '@@/InfoBadge'
import ItemInfo from '@@/ItemInfo'
import PriceDisplay from '@@/PriceDisplay'
import QuantityDisplay from '@@/QuantityDisplay'

export default {
  components: {
    ColorDisplay, ImageDisplay, InfoBadge, ItemInfo, PriceDisplay, QuantityDisplay
  },
  props: {
    uid: { type: String, default: 'none' },
    title: { type: String, default: 'Missing title' },
    images: { type: Object, default: () => ({ placeholder: '#' }) },
    quantity: { type: Number, default: 1 },
    quantityAdjust: { type: Boolean, default: true },
    color: { type: String, default: '' },
    size: { type: String, default: '' },
    fullPrice: { type: Number, default: 0 },
    avaliableDiscount: { type: Number, default: 0 },
    minimalDiscount: { type: Number, default: 0 },
    isGift: { type: Boolean, default: false }
  },
  methods: {
    handleAmountChange (action) {
      console.log(action)
    }
  }
}
