import { Command, Run, Options } from '@jadl/cmd'
import { Embed } from '@jadl/embed'
import { deadTest } from '../utils'

@Command('graph', 'Graph an equation')
export class GraphCommand {
  @Run()
  async graph (
    @Options.String('equation', 'Equation to graph', { required: true }) equation: string
  ) {
    const r = deadTest(equation)

    if (r[0]) return `Prohibited character: ${r[1]}`

    return new Embed()
      .title(`Graph for ${equation}`)
      .image(`https://api.jt3ch.net/ti/${equation}`)
  }
}
