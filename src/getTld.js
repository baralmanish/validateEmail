const tldList = require ('./tldList');

getTld = function (email) {
    var splitEmail = email.split('@');
	var domain = splitEmail[1];
	var splitDomain = domain.split('.');
	return {
		email: email,
		domain: domain,
		genericTld: splitDomain[1],
		countryTld: (splitDomain.length > 2) ? splitDomain[2] : null
	};
}

module.exports = getTld;