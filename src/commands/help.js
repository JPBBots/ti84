/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'help',
  interaction: {
    name: 'help',
    description: 'List all the commands'
  },
  exec: (ctx) => {
    ctx.embed
      .title('Help')
      .field(`${ctx.prefix}help`, 'Shows this menu')
      .field(`${ctx.prefix}calc [equations]`, 'Solves an equation')
      .field(`${ctx.prefix}graph [equation]`, 'Visually graphs the equation')
      .field(`${ctx.prefix}table [equation]`, 'Shows a table of the equation')
      .field(`${ctx.prefix}use`, 'Help for equations in the ti-graph, ti-calc, and ti-table commands')
      .field(`${ctx.prefix}py [a] [b]`, 'Finds the C using the pythagorean theorem')
      .field(`${ctx.prefix}midpoint [x1] [y1] [x2] [y2]`, 'Finds the midpoint of two points')
      .field(`${ctx.prefix}slope [x1] [y1] [x2] [y2]`, 'Finds the slope of a line that passes through two points')
      .field(`${ctx.prefix}distance [x1] [y1] [x2] [y2]`, 'Finds the difference between two points')
      .field(`${ctx.prefix}support`, 'Sends an invite for the support server for the bot')
      .send()
  }
}
module.exports = command
