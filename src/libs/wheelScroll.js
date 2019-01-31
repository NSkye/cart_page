/**
 * Добавляет скролл колесиком мышки на нужный элемент
 * @param {HTMLElement} container
 */
export default function wheelScroll (container) {
  container.addEventListener('wheel', function (e) {
    e.preventDefault()
    this.scrollLeft += e.deltaY * 20
    this.scrollTop = this.scrollTop + e.deltaY * 20
  })
}
