import Vue from 'vue'

export function removeItem (state, uid) {
  state.cartItems = state.cartItems.filter(item => item.uid !== uid)
}

export function removeAllItems (state) {
  state.cartItems = []
}

export function incrementItemQuantity (state, uid) {
  state.cartItems.find(item => {
    if (item.uid !== uid) { return false }
    Vue.set(item, 'quantity', item.quantity + 1)
    return true
  })
}

export function decrementItemQuantity (state, uid) {
  state.cartItems.find((item, i) => {
    if (item.uid !== uid) { return false }
    const nextQuantity = item.quantity - 1
    if (nextQuantity <= 0) {
      state.cartItems.splice(i, 1)
      return true
    }
    Vue.set(item, 'quantity', item.quantity - 1)
  })
}

export function updateUsedDiscount (state, newValue) {
  state.personalAccountUsed = newValue
}
