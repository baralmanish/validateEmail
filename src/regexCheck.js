regexCheck = function (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

module.exports = regexCheck;