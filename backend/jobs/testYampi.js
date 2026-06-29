const download = require("../connectors/yampi/download");
const parser = require("../connectors/yampi/parser");

(async () => {
    try {

        console.log("Baixando XML...");

        const xml = await download();

        console.log("XML recebido.");

        const data = parser(xml);

        console.log(JSON.stringify(data, null, 2));

    } catch (err) {

        console.error(err);

    }
})();
