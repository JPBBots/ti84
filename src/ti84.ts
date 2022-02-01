import { SingleWorker } from 'jadl'
import { CommandHandler } from '@jadl/cmd'
import { Interface } from '@jpbbots/interface'

import { GatewayIntentBits } from 'discord-api-types'

import { CalculateCommand } from './commands/Calculate'
import { DistanceCommand } from './commands/Distance'
import { GraphCommand } from './commands/Graph'
import { HelpCommand } from './commands/Help'
import { MidpointCommand } from './commands/Midpoint'
import { PyThCommand } from './commands/PyTh'
import { SlopeCommand } from './commands/Slope'
import { SupportCommand } from './commands/Support'
import { TableCommand } from './commands/Table'

export class TI84 extends SingleWorker {
  int = new Interface()

  cmd = new CommandHandler(this, [
    CalculateCommand,
    DistanceCommand,
    GraphCommand,
    HelpCommand,
    MidpointCommand,
    PyThCommand,
    SlopeCommand,
    SupportCommand,
    TableCommand
  ], {
    interactionGuild: this.int.production ? undefined : '569907007465848842'
  })

  constructor () {
    super({
      token: process.env.BOT_TOKEN!,
      cache: {
        channels: [],
        roles: false,
        self: false
      },
      cacheControl: {
        guilds: []
      },
      intents: GatewayIntentBits.Guilds | GatewayIntentBits.GuildMessages
    })

    this.setStatus('watching', 'The Calculator')

    this.int.setupSingleton(this, 'ti84')

    this.int.commands.setupOldCommand(
      ['ti-'],
      ['calculate', 'distance', 'graph', 'help', 'midpoint', 'py', 'slope', 'table', 'use']
    )
  }
}
