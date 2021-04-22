const { deadTest, getTable, RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'calculate',
  aliases: ['calc', 'c'],
  exec: async (ctx) => {
    if (ctx.args.join(' ').length > 20) return ctx.reply('Numbers too Long')
    const r = deadTest(ctx.args.join(' '))
    if (r[0]) {
      return ctx.embed
        .title('Error')
        .color(RED)
        .description(`Prohibited character: ${r[1]}`)
        .send()
    }
    const nums = await getTable(ctx.args.join(' '))

    ctx.embed
      .title(`Solution for ${ctx.args.join(' ')}`)
      .description(`${nums[0].y}`)
      .send()
  }
}
module.exports = command
