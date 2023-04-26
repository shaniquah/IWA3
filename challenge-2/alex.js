
const firstName = "Alex";
const surname = "Naidoo";
export const role = "Head of Marketing";    /* export const role to scripts.js to use in console.log */

// fixed format---template string
const display= `${firstName} ${surname} (${role})`;
document.querySelector('#alex').innerText = display;

