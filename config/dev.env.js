var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://10.100.50.102:8080"',
  CONSOLE: JSON.stringify(process.env.TEST)
})
