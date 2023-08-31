const response = (message, data, success) => {
    return {
        success,
        message,
        datalength: data.length,
        data
    }
}

module.exports = response;