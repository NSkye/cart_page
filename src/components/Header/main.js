import Balance from '@@/Balance'
import CartHeader from '@@/CartHeader'
import GoldStatus from '@@/GoldStatus'
import Logo from '@@/Logo'
import Navigation from '@@/Navigation'
import Promo from '@@/Promo'
import RegionDisplay from '@@/RegionDisplay'

export default {
  components: { Balance, CartHeader, GoldStatus, Logo, Navigation, Promo, RegionDisplay },
  data () {
    return {
      isSmartphone: false
    }
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
