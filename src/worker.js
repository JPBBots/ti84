const path = require('path')
const { Interface } = require('@jpbbots/interface')

const int = new Interface()

const { SingleWorker } = require('discord-rose')
const config = require('../config.json')

const worker = new SingleWorker({
  token: config.token,
  cache: {
    channels: false,
    roles: false,
    self: false
  },
  cacheControl: {
    guilds: []
  }
})
int.setupSingleton(worker, 'ti84')

worker.setStatus('watching', 'The Calculator')

global.ROSE_DEFAULT_EMBED.color = 0x2f3136

worker.commands
  .prefix('ti-')
  .load(path.resolve(__dirname, './commands'))
  .add({
    command: 'support',
    exec: (ctx) => ctx.reply('Get support here: https://discord.gg/mx6Gcdb')
  })
