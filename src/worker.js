const path = require('path')
const { Interface } = require('interface')

const int = new Interface()

const { Worker } = require('discord-rose')

const worker = new Worker()
int.setupWorker(worker)

worker.setStatus('watching', 'The Calculator')

worker.commands
  .prefix('ti-')
  .load(path.resolve(__dirname, './commands'))
  .add({
    command: 'support',
    exec: (ctx) => ctx.reply('Get support here: https://discord.gg/mx6Gcdb')
  })
