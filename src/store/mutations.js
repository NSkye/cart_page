import Vue from 'vue'

/**
 * Удалить товар из корзины
 * @param {object} state vuex state
 * @param {string} uid уникальный идентификатор товара
 */
export function removeItem (state, uid) {
  state.cartItems = state.cartItems.filter(item => item.uid !== uid)
}

/**
 * Удалить весь товар из корзины
 * @param {object} state vuex state
 */
export function removeAllItems (state) {
  state.cartItems = []
}

/**
 * Увеличить количество выбранного товара в корзине на 1
 * @param {object} state vuex state
 * @param {string} uid уникальный идентификатор товара
 */
export function incrementItemQuantity (state, uid) {
  state.cartItems.find(item => {
    if (item.uid !== uid) { return false }
    Vue.set(item, 'quantity', item.quantity + 1)
    return true
  })
}

/**
 * Уменьшить количество выбранного товара в корзине на 1
 * @param {object} state vuex state
 * @param {string} uid уникальный идентификатор товара
 */
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

/**
 * Обновить максимальный размер скидки после выставления его пользователем
 * @param {object} state vuex state
 * @param {number} newValue новый максимальный размер скидки
 */
export function updateUsedDiscount (state, newValue) {
  state.personalAccountUsed = newValue
}
