const { deadTest, getTable, RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
module.exports = {
  command: 'table',
  aliases: ['t'],
  interaction: {
    name: 'table',
    description: 'Gets the table for an expression',
    options: [{
      name: 'expression',
      description: 'Expression to make a table for',
      required: true,
      type: 3
    }]
  },
  exec: async (ctx) => {
    if (ctx.isInteraction) {
      ctx.args = [ctx.options.expression]
    }

    const r = deadTest(ctx.args.join(' '))
    if (r[0]) {
      return ctx.embed
        .title('Error')
        .color(RED)
        .description(`Prohibited character: ${r[1]}`)
        .send()
    }

    const nums = await getTable(ctx.args.join(' '))
    let desc = '[x] = [y]\n'
    nums.forEach(o => {
      desc += `**${o.x}** = ${o.y}\n`
    })

    ctx.embed
      .title(`Table for ${ctx.args.join(' ')}`)
      .description(desc)
      .send()
  }
}
