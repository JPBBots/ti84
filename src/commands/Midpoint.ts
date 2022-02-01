import { Command, Run, Options } from '@jadl/cmd'
import { Embed } from '@jadl/embed'

@Command('midpoint', 'Calculates the midpoint of two points')
export class MidpointCommand {
  @Run()
  async midpoint (
    @Options.Number('y2', 'y(2))', { required: true }) y2: number,
    @Options.Number('x2', 'X(2)', { required: true }) x2: number,
    @Options.Number('y1', 'Y(1)', { required: true }) y1: number,
    @Options.Number('x1', 'X(1)', { required: true }) x1: number
  ) {
    const midX = (x2 + x1) / 2
    const midY = (y2 + y1) / 2

    return new Embed()
      .title(`Midpoint of (${x1}, ${y1}) and (${x2}, ${y2})`)
      .description(`(${midX}, ${midY})`)
  }
}
