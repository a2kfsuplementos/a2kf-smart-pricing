const axios = require("axios");

async function download() {
    const response = await axios.get(process.env.YAMPI_XML, {
        timeout: 30000
    });

    return response.data;
}

module.exports = download;
