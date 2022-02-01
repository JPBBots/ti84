import { Command, Run, Options } from '@jadl/cmd'
import { Embed } from '@jadl/embed'

@Command('pythagorean', 'Calculate hypotenuse c given legs a and b')
export class PyThCommand {
  @Run()
  async pyth (
    @Options.Number('b', 'Length of leg b', { required: true }) b: number,
    @Options.Number('a', 'Length of leg a', { required: true }) a: number
  ) {
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    return new Embed()
      .title(`C in triange where a = ${a}, b = ${b}`)
      .description(c.toString())
  }
}
