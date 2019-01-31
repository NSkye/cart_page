/**
 * Вернет все элементы, что находятся в корзине
 * @param {object} state vuex state
 */
export function getItems (state) {
  return state.cartItems
}

/**
 * Вернет название выбранного региона
 * @param {object} state vuex state
 */
export function getCurrentRegionName (state) {
  return state.selectedRegionName
}

/**
 * Вернет текущее количество денег на счету пользователя
 * @param {object} state vuex state
 */
export function getCurrentAccount (state) {
  return state.personalAccount
}

/**
 * Посчитать все элементы в корзине
 * @param {object} state vuex state
 */
export function getItemsCount (state) {
  return state.cartItems.reduce((ac, cv) => ac + Number(cv.quantity || 1), 0)
}

/**
 * Посчитать сумму без скидок
 * @param {object} state vuex state
 */
export function getItemsPriceCount (state) {
  return state.cartItems.reduce((ac, cv) => ac + Number(cv.quantity || 1) * Number(cv.price), 0)
}

/**
 * Вернуть максимальную сумму, которую готов пользователь потратить на скидки
 * @param {object} state vuex state
 */
export function getUsedPersonalAccount (state) {
  return state.personalAccountUsed
}

/**
 * Производит рассчет скидки в зависимости
 * от максимального значения общей скидки,
 * а также максимального значения скидки на каждый товар,
 * при этом ещё учитываются, что у товара может быть минимальная скидка
 * При подсчете каждая единица товара считается отдельно (10 яблок - 10 товаров)
 * @param {object} state vuex state
 */
function getDiscount (state, maxAmount) {
  return state.cartItems.reduce((ac, cv) => {
    let { quantity, minDiscount, maxDiscount } = cv

    // Для каждого товара проходимся столько раз, сколько был добавлен
    while (quantity) {
      // Если не вписываемся в минимальную скидку, то нет смысла продолжать
      if (maxAmount < minDiscount) {
        break
      }

      // Считаем значение после применения максимальной скидки
      const amountAfterApplyingDiscount = maxAmount - maxDiscount

      // Если значение получилось положительным, то применяем скидку к этому товару
      if (amountAfterApplyingDiscount >= 0) {
        maxAmount -= maxDiscount
        ac += maxDiscount

        quantity--
        continue
      }

      // Если значение получилось отрицательное, то корректируем размер скидки
      let nextMaxDiscount = maxDiscount + amountAfterApplyingDiscount

      // Если после коррекции скидка не вписывается в минимальную, то дропаем
      if (nextMaxDiscount < minDiscount) {
        quantity--
        continue
      }

      maxAmount -= nextMaxDiscount
      ac += nextMaxDiscount

      quantity--
    }

    return ac
  }, 0)
}

/**
 * Рассчитать максимальную возможную скидку
 * исходя из счета пользователя и
 * максимальных и минимальных размеров скидок на все товары
 * @param {object} state vuex state
 */
export function getMaxDiscount (state) {
  return getDiscount(state, state.personalAccount)
}

/**
 * Рассчитать получить значение получающейся скидки при выставлении
 * пользователем значения максимальной скидки
 * @param {object} state vuex state
 */
export function getActualDiscount (state) {
  return getDiscount(state, state.personalAccountUsed)
}

/**
 * Получить стоимость доставки, стоимость товаров и все скидки
 * @param {object} state vuex state
 */
export function getAllTotal (state) {
  const total = getItemsPriceCount(state) - getActualDiscount(state)
  const shipping = total < state.freeShippingFrom ? state.shippingPrice : 0

  if (!state.goldStatusBonus) {
    return {
      shipping,
      total,
      bonusInPercents: 0,
      bonusInMoney: 0,
      cashBack: total
    }
  }

  const goldStatusRate = state.goldStatusBonus / 100 + 1
  const cashBack = Math.floor(total * goldStatusRate)

  return {
    shipping,
    total,
    bonusInPercents: state.goldStatusBonus,
    bonusInMoney: cashBack - total,
    cashBack
  }
}
