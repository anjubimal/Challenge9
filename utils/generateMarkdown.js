// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  l = data.licenses
  if (l == 'MIT'){
    return `https://img.shields.io/apm/l/vim-mode`
  } else if (l == 'Apache License 2.0'){
    return `https://img.shields.io/aur/license/android-studio`
  } else if (l == 'ISC'){
    return `https://img.shields.io/cran/l/devtools`
  } else if (l == 'GNU GPLv3'){
    return `https://img.shields.io/pypi/l/Django`
  } else 
  return  ''
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  l = data.licenses
  if (l == 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if (l == 'Apache License 2.0') {
    return `https://www.apache.org/`
  } else if (l == 'ISC') {
    return `https://opensource.org/licenses/ISC`
  } else if (l == 'GNU GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  } else
    return ''
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  ![badmath](${renderLicenseBadge(data)})
  #  ${data.title}
  ## Description 
  * ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Liscense](#License)
  * [Contributers](#Contributers)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ## Installation Guide 
  * ${data.installation}
  ## Usage 
  * ${data.usage}
  ## License
  ${renderLicenseLink(data)}
  ## Contributers 
  * ${data.contributers}
  ## Tests 
  * ${data.test}
  ## Questions
  * https://github.com/${data.github}
  * For further information you can contact me through email. Email: ${data.email}


`;
}

module.exports = generateMarkdown;
