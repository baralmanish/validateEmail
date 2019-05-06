const checkTld = require ('./checkTld');
const constructResponse = require ('./constructResponse');
const checkEmailExists = require ('./checkEmailExists');

const validate = {
    emailValid: function(email, checkExist = false) {
        if (email) {
            let check_tld = checkTld(email);
            if (check_tld.success && checkExist) {
                return checkEmailExists(email);
            }
            return check_tld;
        }
        return constructResponse(false, 'Missing email address');
    }
}

module.exports = validate;