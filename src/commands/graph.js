const { deadTest, RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'graph',
  aliases: ['g'],
  exec: (ctx) => {
    const r = deadTest(ctx.args.join(' '))
    if (r[0]) {
      return ctx.embed
        .title('Error')
        .color(RED)
        .description(`Prohibited character: ${r[1]}`)
        .send()
    }

    ctx.embed
      .title(`Graph for ${ctx.args.join(' ')}`)
      .image(`https://api.jt3ch.net/ti/${ctx.args.join(' ')}`)
      .send()
  }
}
module.exports = command
