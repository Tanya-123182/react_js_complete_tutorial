import name from "./app.js"
import { age } from "./app.js"

var h1 = document.createElement('h1');
var h2 = document.createElement('h1');
h1.innerHTML = name 
h2.innerHTML = age

document.body.appendChild(h1);
document.body.appendChild(h2);