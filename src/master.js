const { Master } = require('discord-rose')
const AutoPoster = require('topgg-autoposter')

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

AutoPoster(config.dbl, master)
  .on('posted', () => {
    master.log('Posted Stats to Top.gg')
  })

master.start()
