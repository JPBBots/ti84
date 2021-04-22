const fetch = require('node-fetch')

exports.getTable = async (eq) => {
  return fetch(encodeURI(`https://api.jt3ch.net/ti/table/${eq}`)).then(x => x.json())
}

const deadMatch = /[^0-9xXR^+*\-/(){}.|\s]/gi

exports.deadTest = (STRING) => {
  STRING = STRING.replace(/rand/gi, '{R}').replace(/pi/gi, Math.PI).replace(/e/gi, Math.E)
  const res = deadMatch.exec(STRING)
  if (res) {
    return [true, res[0]]
  } else {
    return [false, STRING]
  }
}

exports.RED = 0xE74C3C
