const { RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'slope',
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
        .description('Format: `ti-slope x1 y1 x2 y2`')
        .send()
    }
    const slope = ((y2 - y1) / (x2 - x1))

    ctx.embed
      .title(`Slope of a line that passed through (${x1}, ${y1}) and (${x2}, ${y2})`)
      .description(`${slope || 'undefined'}`)
      .send()
  }
}
module.exports = command
