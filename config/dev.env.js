var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://10.135.80.77:30005/sp-bc"',
  CONSOLE: JSON.stringify(process.env.TEST)
})
