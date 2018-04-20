var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
<<<<<<< HEAD
  BASE_URL: '"http://localhost:8080"',
=======
  BASE_URL: '"http://192.168.43.139:8080"',
>>>>>>> 925a9f7c2c787554cf0e7db1d5ebd92f21dc6404
})
