import {company, year} from './configuration.js'; // company must be in {} or JavaScript will throw an error---syntax in referencing configuration.js
// JavaScript is very sensitive---spelling error in from will also throw error

const message = `© ${company} ${year}`
document.querySelector('footer').innerText = message
