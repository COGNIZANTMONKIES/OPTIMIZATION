let n1 = require('./numbers-1.js');
let n1_1 = require('./numbers-1-1.js');
let n1_2 = require('./numbers-1-2.js');
let n1_3 = require('./numbers-1-3.js');

let t=[0,0,0,0,0,0,0,0]; // times

let lim = 400;


let s0 = new Date().getTime();
for (var i=1; i !== lim; i++) {n1(i)}
let f0 = new Date().getTime();
t[0]=f0-s0;

let s1 = new Date().getTime();
for (var i=1; i !== lim; i++) {n1_1(i)}
let f1 = new Date().getTime();
t[1]=f1-s1;

let s2 = new Date().getTime();
for (var i=1; i !== lim; i++) {n1_2(i)}
let f2 = new Date().getTime();
t[2]=f2-s2;

let s3 = new Date().getTime();
for (var i=1; i !== lim; i++) {n1_3(i)}
let f3 = new Date().getTime();
t[3]=f3-s3;



t.forEach((e,i)=>{

	console.log(i, e);

});