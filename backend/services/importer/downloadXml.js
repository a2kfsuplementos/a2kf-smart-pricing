const axios = require("axios");

async function downloadXml() {

    const response = await axios.get(process.env.YAMPI_XML);

    return response.data;

}

module.exports = downloadXml;
