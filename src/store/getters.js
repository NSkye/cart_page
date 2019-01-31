export function getItems (state) {
  return state.cartItems
}

export function getCurrentRegionName (state) {
  return state.selectedRegionName
}

export function getCurrentAccount (state) {
  return state.personalAccount
}

export function getItemsCount (state) {
  return state.cartItems.reduce((ac, cv) => ac + Number(cv.quantity || 1), 0)
}

export function getItemsPriceCount (state) {
  return state.cartItems.reduce((ac, cv) => ac + Number(cv.quantity || 1) * Number(cv.price), 0)
}

export function getUsedPersonalAccount (state) {
  return state.personalAccountUsed
}

function getDiscount (state, maxAmount) {
  return state.cartItems.reduce((ac, cv) => {
    let { quantity, minDiscount, maxDiscount } = cv

    while (quantity) {
      if (maxAmount < minDiscount) {
        break
      }

      const amountAfterApplyingDiscount = maxAmount - maxDiscount

      if (amountAfterApplyingDiscount >= 0) {
        maxAmount -= maxDiscount
        ac += maxDiscount

        quantity--
        continue
      }

      let nextMaxDiscount = maxDiscount + amountAfterApplyingDiscount

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

export function getMaxDiscount (state) {
  return getDiscount(state, state.personalAccount)
}

export function getActualDiscount (state) {
  return getDiscount(state, state.personalAccountUsed)
}

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
