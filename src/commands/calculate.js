const { deadTest, getTable } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
module.exports = {
  command: 'calculate',
  interaction: {
    name: 'calculate',
    description: 'Calculate an expression',
    options: [{
      name: 'expression',
      description: 'Expression to calculate',
      required: true,
      type: 3
    }]
  },
  aliases: ['calc', 'c'],
  exec: async (ctx) => {
    if (ctx.isInteraction) {
      ctx.args = [ctx.options.expression]
    }
    if (ctx.args.join(' ').length > 20) return ctx.error('Numbers too Long')
    const r = deadTest(ctx.args.join(' '))
    if (r[0]) {
      return ctx.error(`Prohibited character: ${r[1]}`)
    }
    const nums = await getTable(ctx.args.join(' '))

    ctx.embed
      .title(`Solution for ${ctx.args.join(' ')}`)
      .description(`${nums[0].y}`)
      .send()
  }
}
