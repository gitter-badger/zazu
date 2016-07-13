const Promise = require('bluebird')
const { exec } = require('child_process')

const globalEmitter = require('./globalEmitter')

Promise.config({
  cancellation: true,
})

class Process {
  static execute (script, userOptions = {}) {
    const options = Object.assign({}, {
      cwd: process.cwd(),
      env: process.env,
    }, userOptions)
    return new Promise((resolve, reject, onCancel) => {
      const cmd = exec(script, options, (error, stdout, stderr) => {
        if (error) {
          reject(stderr)
        } else {
          resolve(stdout)
        }
      })

      onCancel(() => {
        globalEmitter.emit('message', 'killing signal')
        cmd.kill('SIGKILL')
      })
    })
  }
}

module.exports = Process
