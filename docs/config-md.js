const path = require("path");
const fs = require("fs");

/** @type import('solidity-docgen/dist/config').UserConfig */
module.exports = {
	outputDir: "docs/modules/api/pages",
	templates: "docs/templates-md",
	exclude: ["internals"],
	pageExtension: ".mdx",
	pages: "files",
};
