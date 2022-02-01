import { Command, Run, Options } from '@jadl/cmd'
import { Embed } from '@jadl/embed'

@Command('slope', 'Calculate the slope of two points')
export class SlopeCommand {
  @Run()
  async slope (
    @Options.Number('y2', 'y(2))', { required: true }) y2: number,
    @Options.Number('x2', 'X(2)', { required: true }) x2: number,
    @Options.Number('y1', 'Y(1)', { required: true }) y1: number,
    @Options.Number('x1', 'X(1)', { required: true }) x1: number
  ) {
    const slope = ((y2 - y1) / (x2 - x1))

    return new Embed()
      .title(`Slope of a line that passed through (${x1}, ${y1}) and (${x2}, ${y2})`)
      .description(slope.toString())
  }
}
