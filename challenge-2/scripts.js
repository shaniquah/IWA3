// had to import variables from their respective .js files to reference the m here

import { role as role1 } from './nwabisa.js';
import { role as role2 } from './johannes.js';
import { role as role3 } from './alex.js';


// johannes was misspelt- code wouldn't recognize the element
console.log( `Roles: ${role1}, ${role2}, ${role3}`);