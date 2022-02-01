import { Command, Run, Options } from '@jadl/cmd'
import { Embed } from '@jadl/embed'

@Command('distance', 'Calculate the distance between two points')
export class DistanceCommand {
  @Run()
  async distance (
    @Options.Number('y2', 'y(2))', { required: true }) y2: number,
    @Options.Number('x2', 'X(2)', { required: true }) x2: number,
    @Options.Number('y1', 'Y(1)', { required: true }) y1: number,
    @Options.Number('x1', 'X(1)', { required: true }) x1: number
  ) {
    const a = x1 - x2
    const b = y1 - y2

    const distance = Math.sqrt(a * a + b * b)

    return new Embed()
      .title(`Distance between (${x1}, ${y1}) and (${x2}, ${y2})`)
      .description(`${distance}`)
  }
}
