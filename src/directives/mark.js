import WaterMark from './waterMark'

export default {
  bind (el, binding) {
    const { value } = binding
    const waterMark = new WaterMark({ height: 200, aplha: 0.18, angle: 25 })
    const $el = waterMark.creatElementItem(value)

    const markParentElem = document.createElement('div')
    // 设置样式
    markParentElem.id = 'watt-water'
    markParentElem.style.position = 'fixed'
    markParentElem.style.top = '30px'
    markParentElem.style.left = '40px'
    markParentElem.style.right = '40px'
    markParentElem.style.bottom = '30px'
    markParentElem.style.zIndex = 100
    markParentElem.style.pointerEvents = 'none'
    markParentElem.style.overflow = 'hidden'
    markParentElem.appendChild($el)
    el.appendChild(markParentElem)
  },
  unbind () {
    const elem = document.getElementById('cnhn-water')
    elem && elem.remove()
  }
}
