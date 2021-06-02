const { RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
module.exports = {
  command: 'slope',
  interaction: {
    name: 'slope',
    description: 'Calculate the slope of two points',
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
