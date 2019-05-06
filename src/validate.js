const checkTld = require ('./checkTld');
const constructResponse = require ('./constructResponse');
const checkEmailExists = require ('./checkEmailExists');

const validate = {
    email: function(email, checkExist = false) {
        if (email) {
            let check_tld = checkTld(email);
            if (check_tld.success && checkExist) {
                let email_exist = checkEmailExists(email);
                if (email_exist.success) {
                    return constructResponse(true, `'${email}' is valid email address`);
                }
                return email_exist;
            }
            return check_tld;
        }
        return constructResponse(false, 'Missing email address');
    }
}

module.exports = validate;