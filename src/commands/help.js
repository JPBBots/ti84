/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'help',
  exec: (ctx) => {
    ctx.embed
      .title('Help')
      .field('ti-help', 'Shows this menu')
      .field('ti-calc [equations]', 'Solves an equation')
      .field('ti-graph [equation]', 'Visually graphs the equation')
      .field('ti-table [equation]', 'Shows a table of the equation')
      .field('ti-use', 'Help for equations in the ti-graph, ti-calc, and ti-table commands')
      .field('ti-py [a] [b]', 'Finds the C using the pythagorean theorem')
      .field('ti-midpoint [x1] [y1] [x2] [y2]', 'Finds the midpoint of two points')
      .field('ti-slope [x1] [y1] [x2] [y2]', 'Finds the slope of a line that passes through two points')
      .field('ti-distance [x1] [y1] [x2] [y2]', 'Finds the difference between two points')
      .field('ti-support', 'Sends an invite for the support server for the bot')
      .send()
  }
}
module.exports = command
