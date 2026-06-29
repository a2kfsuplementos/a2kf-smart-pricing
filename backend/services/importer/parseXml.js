const { XMLParser } = require("fast-xml-parser");

const parser = new XMLParser({
    ignoreAttributes: false
});

function parseXml(xml) {

    return parser.parse(xml);

}

module.exports = parseXml;
