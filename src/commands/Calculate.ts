import { Command, Run, Options } from '@jadl/cmd'
import { Embed } from '@jadl/embed'

import { deadTest, getTable } from '../utils'

@Command('calculate', 'Calculate an expression')
export class CalculateCommand {
  @Run()
  async calculate (
    @Options.String('expression', 'Expression to calculate', { required: true }) expression: string
  ) {
    if (expression.length > 20) return 'Numbers too long'

    const r = deadTest(expression)

    if (r[0]) return `Prohibited character: ${r[1]}`

    const nums = await getTable(expression)

    return new Embed()
      .title(`Solution for ${expression}`)
      .description(nums[0].y.toString())
  }
}
