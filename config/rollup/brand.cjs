const fs = require('node:fs');
const pkg = require('../../package.json');
const licenseContent = fs.readFileSync('LICENSE', 'utf8');

const { name, version, description, author, bugs, homepage, license } = pkg;

const banner = `/*!
 * ${name} v${version}
 * ${description}
 * ${licenseContent}
 */
`;

const footer = `/*!
 * ${name} v${version} (${license})
 * author: ${author}
 * issue: ${bugs.url}
 * homepage: ${homepage}
 */
`;

module.exports = { banner, footer };
