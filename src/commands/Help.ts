import { Command, Run, Options } from '@jadl/cmd'
import { Embed } from '@jadl/embed'
import { deadTest } from '../utils'

@Command('help', 'Lists usable expressions for the graph, calculaate, and table commands')
export class HelpCommand {
  @Run()
  async graph () {
    return new Embed()
      .title('How to use')
      .field('Addition/Subtraction', 'Same as real world. Ex: `3+3 => 6` and `3-3 => 0`')
      .field('Multiplication', 'Use the `*` symbol. Ex: `3*3 => 9`')
      .field('Division', 'Use the `/` symbol. Ex: `3/3 => 1`')
      .field('Exponents', 'Use the `^` symbol, a^b. Ex: `3^3 => 27`')
      .field('Function Notation', 'Using `x` will work as real world. Ex: `3x => f(3) => 9`')
      .field('Absolute Value', 'Using the `|` symbol, works as real world: `|3| => 3` and `|-3| => 3`')
      .field('Random Value', 'Use `rand` to signify a random value every X, Ex: `3+rand => Random Number Between 3, 13`')
      .field('PI (3.141592 etc.)', 'Use `pi` to signify PI, Ex: `3+pi => 6.141592653589793 etc.`')
      .field("Euler's Number (2.71828 etc.)", 'Use `e` to signify eulers number, Ex: `3+e` => `5.71828 etc.`')
      .footer('Usable on the /graph, /calc, and /table commands')
  }
}
