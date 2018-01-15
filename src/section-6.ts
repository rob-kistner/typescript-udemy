/*
IMPORTANT

TS needs a module loader installed to properly 
import modules. systemjs is a good one, install 
with npm i -D systemjs
*/
import {PI, calcCirc} from './circle';
import {calcRect} from './rectangle';


console.log(PI);
console.log(calcCirc(10));
console.log(calcRect(5,2));
// console.log("Yet another test line");
