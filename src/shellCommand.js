const shell = require('shelljs');

shellCommand = function (command, action = 'exec') {
    const res = shell.exec(command);
    return {
        success: (res.stdout) ? true : false,
        result: res.stdout || res.stderr
    }
}

module.exports = shellCommand;