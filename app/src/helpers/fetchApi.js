const rq = require('request-promise-native')

const fetchApi = async (opts = {}) => {
    const options = {
        method: 'GET',
        json: true,
        ...opts
    };
    console.log({ options })
    try {
        const result = await rq(options)
        return result
    } catch (e) {
        throw Error(e.statusCode)
    }
}

module.exports = fetchApi;