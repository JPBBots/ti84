import { Command, Run, Options } from '@jadl/cmd'
import { Embed } from '@jadl/embed'

import { deadTest, getTable } from '../utils'

@Command('calculate', 'Calculate an expression')
export class TableCommand {
  @Run()
  async table (
    @Options.String('expression', 'Expression to make a table for', { required: true }) expression: string
  ) {
    const r = deadTest(expression)

    if (r[0]) return `Prohibited character: ${r[1]}`

    const nums = await getTable(expression)

    let desc = '[x] = [y]\n'
    for (const { x: x, y: y } of nums) desc += `**${x}** = ${y}\n`

    return new Embed()
      .title(`Solution for ${expression}`)
      .description(nums[0].y.toString())
  }
}
