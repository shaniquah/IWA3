// removed private and public modules from code---not built-in concepts in JavaScript
// created reference error---replaced modules with const to declare variables
const firstName = "Nwabisa";
const surname = "Gabe";
export const role = "CEO";

const display = `${firstName} ${surname} (${role})`;
document.querySelector('#nwabisa').innerText = display;

