const downloadXml = require("../services/importer/downloadXml");
const parseXml = require("../services/importer/parseXml");

async function executeImport() {

    console.log("Iniciando importação...");

    const xml = await downloadXml();

    const data = parseXml(xml);

    console.log("XML carregado.");

    console.log(data);

}

executeImport();
