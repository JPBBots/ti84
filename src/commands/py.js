const { RED } = require('../utils')

/**
 * @type {import('discord-rose').CommandOptions}
 */
const command = {
  command: 'py',
  interaction: {
    name: 'pythagorean',
    description: 'Calculates two numbers with the pythagorean theorem',
    options: [{
      name: 'a',
      description: 'The a number',
      required: true,
      type: 4
    }, {
      name: 'b',
      description: 'The b number',
      required: true,
      type: 4
    }]
  },
  exec: (ctx) => {
    if (ctx.isInteraction) {
      ctx.args = [ctx.options.a, ctx.options.b]
    }

    let [a, b] = ctx.args
    a = Number(a)
    b = Number(b)
    if ([a, b].includes(NaN)) {
      return ctx.embed
        .title('Invalid character')
        .color(RED)
        .description('Format: `ti-py a b`')
        .send()
    }

    const hypo = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    ctx.embed
      .title(`C in triange where a = ${a}, b = ${b}`)
      .description(`${hypo}`)
      .send()
  }
}
module.exports = command
