export function isArray (arr) {
  if (!Array.isArray) {
    Array.isArray = (arg) => {
      return Object.prototype.toString.call(arg) === '[object Array]'
    }
  }
  return Array.isArray(arr)
}

/**
 * 防抖函数
 * @param {Function} event 执行事件
 * @param {Number} time 延迟时间
 */
export function debounce (event, time) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      event.apply(this, args)
    }, time)
  }
}

// Find components upward
export function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

// Find components downward
export function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

// Find brothers components
export function findBrothersComponents (context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res
}
