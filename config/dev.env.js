var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
<<<<<<< HEAD
  BASE_URL: '"http://10.100.50.102:8080"',
=======
  BASE_URL: '"http://127.0.0.1:8080"',
>>>>>>> 0c0953394ccb4daee441fd18c53ff041afae2dd4
  CONSOLE: JSON.stringify(process.env.TEST)
})
