const { Master } = require('discord-rose')

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

master.start()
