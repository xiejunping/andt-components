/*
 * @description添加水印
 * @param {Obj} settings水印配置参数
 */
class WaterMark {
  constructor({
    angle,
    pageX,
    pageY,
    rows,
    cols,
    color,
    aplha,
    size,
    width,
    height,
    container
  }) {
    this.angle = angle || 15
    this.pageX = pageX || -10
    this.pageY = pageY || 0
    this.rows = rows || 10
    this.cols = cols || 20
    this.color = color || '#E8E8E8'
    this.alpha = aplha || 0.25
    this.fontSize = size || '16px'
    this.width = width || 200
    this.height = height || 100
    this.container = container
  }

  // 插入子集水印
  creatElementItem(text) {
    let x
    let y
    const fragment = document.createDocumentFragment()
    // 行
    for (let i = 0; i < this.rows; i++) {
      y = this.pageY + this.height * i
      y = isNaN(y) ? 40 : y
      // 列
      for (let j = 0; j < this.cols; j++) {
        const markElement = document.createElement('div')
        const markSpan = document.createElement('span')
        x = this.pageX + this.width * j

        // 超过内容的右边
        if (x + this.width > this.container) continue

        // 设置水印div倾斜显示
        markElement.style.webkitTransform = 'rotate(-' + this.angle + 'deg)'
        markElement.style.MozTransform = 'rotate(-' + this.angle + 'deg)'
        markElement.style.msTransform = 'rotate(-' + this.angle + 'deg)'
        markElement.style.OTransform = 'rotate(-' + this.angle + 'deg)'
        markElement.style.transform = 'rotate(-' + this.angle + 'deg)'
        markElement.style.visibility = ''
        markElement.style.position = 'absolute'
        markElement.style.left = x + 'px'
        markElement.style.top = y + 'px'
        markElement.style.overflow = 'hidden'
        markElement.style.zIndex = '10'
        markElement.style.pointerEvents = 'none'
        markElement.style.opacity = this.alpha
        markElement.style.fontSize = this.fontSize
        markElement.style.color = this.color
        markElement.style.textAlign = 'center'
        markElement.style.width = this.width + 'px'
        markElement.style.height = this.height + 'px'
        markElement.style.display = 'block'
        markElement.style.filter = 'alpha(opacity=' + this.alpha * 100 + ')'

        // 设置span的样式
        // markSpan.style.backgroundColor = '#b8ddff' // #1890FF'
        markSpan.style.display = 'inline-block'
        markSpan.style.padding = '2px 6px'
        markSpan.style.color = '#b8ddff'
        markSpan.innerHTML = text
        markElement.appendChild(markSpan)
        fragment.appendChild(markElement)
      }
    }

    return fragment
  }
}

export default WaterMark
