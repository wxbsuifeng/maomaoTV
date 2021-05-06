const fs = require('fs-extra')
const path = require('path')
const moment = require('moment')

const { LOGGER_DIR } = require('./config')

if (!fs.existsSync(LOGGER_DIR)) {
  fs.ensureDirSync(LOGGER_DIR, 0o700)
}

module.exports = function logger (str) {
  let currentDay = moment(Date.now()).format('YYYY-MM-DD');
  let fileName = path.join(LOGGER_DIR, `${currentDay}.txt`);

  if (!fs.existsSync(fileName)) {
    fs.createFile(fileName)
  }
  
  str = '\n' + str;
  fs.appendFile(fileName, str);
}