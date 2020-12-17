// function to generate markdown for README
const data = require('./index')
const fs = require('fs')
generateMarkdown();
function generateMarkdown() {

    if (data.type_of_license === "mit") {
        var license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } 
    if (data.type_of_license === "creative commons") {
        var license = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"   
    }  
    if (data.type_of_license === "mozilla public license 2.0"){
        var license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    if (data.type_of_license === "none"){
        var license = "There was no license selected"
    }

    fs.appendFileSync('README.md', 
    (
        `# ${data.name_of_project}\n` + 
        `## Description: \n ${data.answer_description}\n` +
        `\n${license}\n` +
        `## Table of Contents: \n` +
        `*[Install](#install) \n` +
        `*[Contributed](#contributed) \n` +
        `*[License](#license) \n` +
        `*[Questions](#questions) \n` +
        `## Install: \n ${data.step}\n` +
        `## Contributed: \n ${data.names}\n` +
        `## License: \n ${license}\n` +
        `## Questions: \n ### GitHub Name: [GitHub Profile](https://www.github.com/${data.github_name})\n ### Email: ${data.email}`
    )
    ,(err) => err ? console.error(err) : console.log('Commit logged!'));
}
