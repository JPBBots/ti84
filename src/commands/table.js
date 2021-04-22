const { deadTest, getTable, RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'table',
  aliases: ['t'],
  exec: async (ctx) => {
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
module.exports = command
