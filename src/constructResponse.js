constructResponse = function (success, message) {
    return {
        success: success,
        message: message
    };
}

module.exports = constructResponse;