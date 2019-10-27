const fs = require('fs-extra')
const path = require('path')

fs.copySync(path.resolve(__dirname, '../node_modules/swiper/css'), path.resolve(__dirname, '../public/swiper'))
fs.copySync(path.resolve(__dirname, '../node_modules/swiper/js'), path.resolve(__dirname, '../public/swiper'))
