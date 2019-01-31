export default function touchScroll (area, target) {
  let tmpX, tmpY, widthY

  area.addEventListener('touchstart', e => {
    tmpX = e.touches[0].clientX + target.scrollLeft
    if (widthY) {
      tmpY = e.touches[0].clientY + target.scrollTop
    }
  })

  area.addEventListener('touchmove', e => {
    const diffX = tmpX - e.touches[0].clientX
    target.scrollLeft = diffX
    if (widthY) {
      const diffY = tmpY - e.touches[0].clientY
      target.scrollTop = diffY
    }
  })
}
