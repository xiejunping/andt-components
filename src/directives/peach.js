export default {
  bind (el, binding) {
    const {
      value, //
      arg // 参数event  v-peach:event
    } = binding

    /*
      modifiers, // 修饰符
    */

    el.addEventListener('click', () => {
      if (arg === 'event') {
        const { category, action } = value
        window._hmt.push(['_trackEvent', category, action])
      } else if (arg === 'pagevt') {
        const { category, action } = value
        window._hmt.push(['_trackPageview', category, action])
      }
    })
  }
}
