const { RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'midpoint',
  aliases: ['mid'],
  exec: (ctx) => {
    let [x1, y1, x2, y2] = ctx.args
    x1 = Number(x1)
    x2 = Number(x2)
    y1 = Number(y1)
    y2 = Number(y2)
    if ([x1, x2, y1, y2].includes(NaN)) {
      return ctx.embed
        .title('Invalid character')
        .color(RED)
        .description('Format: `ti-midpoint x1 y1 x2 y2`')
        .send()
    }
    const midX = (x2 + x1) / 2
    const midY = (y2 + y1) / 2

    ctx.embed
      .title(`Midpoint of (${x1}, ${y1}) and (${x2}, ${y2})`)
      .description(`(${midX}, ${midY})`)
      .send()
  }
}
module.exports = command
