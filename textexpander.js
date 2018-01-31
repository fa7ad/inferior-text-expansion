;(function (w, d) {
  w.iExpandText = function iExpandText (opts) {
    const { selector, dictionary } = Object.assign(
      {
        selector: '#input',
        dictionary: { omg: 'oh my god', lol: 'laugh out loud' }
      },
      opts
    )
    d.querySelector(selector).addEventListener('keydown', e => {
      if (/\W/.test(e.key)) {
        try {
          const word = e.target.value.split(/\W/).slice(-1)[0]
          const caps = word.toUpperCase() === word

          if (!dictionary.hasOwnProperty(word.toLowerCase())) return

          e.target.value = e.target.value.replace(
            new RegExp(word + '$'),
            caps
              ? dictionary[word.toLowerCase()].toUpperCase()
              : dictionary[word]
          )
        } catch (e) {
          console.warn(e)
        }
      }
    })
  }
})(window, document)
