const { RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'py',
  exec: (ctx) => {
    let [a, b] = ctx.args
    a = Number(a)
    b = Number(b)
    if ([a, b].includes(NaN)) {
      return ctx.embed
        .title('Invalid character')
        .color(RED)
        .description('Format: `ti-py a b`')
        .send()
    }

    const hypo = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    ctx.embed
      .title(`C in triange where a = ${a}, b = ${b}`)
      .description(`${hypo}`)
      .send()
  }
}
module.exports = command
