const tldList = require ('./tldList');
const getTld = require ('./getTld');
const regexCheck = require ('./regexCheck');

checkTld = function (email) {
    var tld = getTld(email);
	var success = true;
	var message = `'${email}' is valid email address`;

	if (regexCheck(email)) {
		// check genericTld;
		if (tldList.some(el => (el.Type === 'generic' && el.Domain === '.' + tld.genericTld))) {
            // check countryTld;
			if (tld.countryTld) {
                if (!tldList.some(el => (el.Type === 'country-code' && el.Domain === '.' + tld.countryTld))) {
					success = false;
					message = `'.${tld.genericTld}.${tld.countryTld}' is not valid country domain extension`
				}
			}
		} else {
			success = false;
			message = `'.${tld.genericTld}' is not valid generic domain extension`
		}
	} else {
		success = false;
		message = `'${email}' is invalid email address`;
	}

	return constructResponse(success, message);
}

module.exports = checkTld;