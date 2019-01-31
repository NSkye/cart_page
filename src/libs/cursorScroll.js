export default function cursorScroll (container) {
  let isDown = false
  let tempX
  let tempY

  container.addEventListener('mousedown', e => {
    isDown = true
    tempX = e.layerX
    tempY = e.layerY
  })

  container.addEventListener('mousemove', e => {
    if (!isDown) return
    container.scrollLeft += tempX - e.layerX
    container.scrollTop += tempY - e.layerY
  })

  container.addEventListener('mouseup', () => {
    isDown = false
  })

  container.addEventListener('mouseleave', () => {
    isDown = false
  })
}
