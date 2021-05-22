const { RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'distance',
  interaction: {
    name: 'distance',
    description: 'Calculate the distance between two points',
    options: [{
      name: 'x1',
      description: 'X(1)',
      required: true,
      type: 4
    },
    {
      name: 'y1',
      description: 'Y(1)',
      required: true,
      type: 4
    },
    {
      name: 'x2',
      description: 'X(2)',
      required: true,
      type: 4
    },
    {
      name: 'y2',
      description: 'Y(2)',
      required: true,
      type: 4
    }]
  },
  aliases: ['d'],
  exec: (ctx) => {
    if (ctx.isInteraction) {
      ctx.args = [ctx.options.x1, ctx.options.y1, ctx.options.x2, ctx.options.y2]
    }
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
