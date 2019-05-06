const shellCommand = require('./shellCommand');
const getTld = require ('./getTld');

checkEmailExists = function (email) {
    var tld = getTld(email);
    return checkDomain(tld.domain);
    
}

checkDomain = function(domain) {
    let check = shellCommand(`nslookup -q=mx ${domain}`);
    shellCommand(`exit`);
    let success = false;
    let message;
    let result;

    if (check.success) {
        if (check.result.includes('mail exchanger')) {
            success = true;
            message = `${domain} is a valid email host`;
            result = check.result;
        } else {
            success = false;
            message = `${domain} is not a valid email host`;
        }
    }

    return  {
        success: success,
        message: message,
        result: result
    }
};

module.exports = checkEmailExists;