const { Master } = require('discord-rose')
const AutoPoster = require('topgg-autoposter')

const { Interface } = require('interface')

const int = new Interface()

const path = require('path')

const config = require('../config.json')

const master = new Master(path.resolve(__dirname, './worker.js'), {
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

int.setupMaster(master, 'ti84')

AutoPoster(config.dbl, master)
  .on('posted', () => {
    master.log('Posted Stats to Top.gg')
  })

master.start()
