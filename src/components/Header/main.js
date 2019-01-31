import Balance from '@@/Balance'
import CartHeader from '@@/CartHeader'
import GoldStatus from '@@/GoldStatus'
import Logo from '@@/Logo'
import Navigation from '@@/Navigation'
import Promo from '@@/Promo'
import RegionDisplay from '@@/RegionDisplay'
import { mapGetters } from 'vuex'

export default {
  components: { Balance, CartHeader, GoldStatus, Logo, Navigation, Promo, RegionDisplay },
  data () {
    return {
      isSmartphone: false
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentRegionName',
      'getCurrentAccount',
      'getItemsCount'
    ])
  },
  methods: {
    detectSmartphone () {
      this.isSmartphone = window.innerWidth <= 660
    }
  },
  created () {
    this.detectSmartphone()
    window.addEventListener('resize', this.detectSmartphone)
  }
}
