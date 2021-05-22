const { RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'midpoint',
  interaction: {
    name: 'midpoint',
    description: 'Calculates the midpoint of two graph points',
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
  aliases: ['mid'],
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
