const { XMLParser } = require("fast-xml-parser");

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: ""
});

module.exports = (xml) => parser.parse(xml);
