require('dotenv').config()
exports.handler = async (event,context) => {

    const key = { key: process.env.MAPTILER_API_KEY };

    return {
        statusCode:200,
        body: JSON.stringify(key),
        contentType:'application/json',

    }

}