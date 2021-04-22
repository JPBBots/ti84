const { RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'distance',
  aliases: ['d'],
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
        .description('Format: `ti-distance x1 y1 x2 y2`')
        .send()
    }
    const a = x1 - x2
    const b = y1 - y2

    const distance = Math.sqrt(a * a + b * b)

    ctx.embed
      .title(`Distance between (${x1}, ${y1}) and (${x2}, ${y2})`)
      .description(`${distance}`)
      .send()
  }
}
module.exports = command
