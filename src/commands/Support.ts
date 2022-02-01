import { Command, Run } from '@jadl/cmd'

@Command('support', 'Get the support server invite link')
export class SupportCommand {
  @Run()
  async support () {
    return 'Get support here: https://discord.gg/mx6Gcdb'
  }
}
