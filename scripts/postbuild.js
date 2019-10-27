const fs = require('fs-extra')
const path = require('path')

fs.copySync(path.resolve(__dirname, '../public'), path.resolve(__dirname, '../dist'))
