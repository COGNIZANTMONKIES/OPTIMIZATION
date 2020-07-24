let n0 = require('./numbers-0.js');
let n0_1 = require('./numbers-0-1.js');
let n0_2 = require('./numbers-0-2.js');
let n0_3 = require('./numbers-0_3.js');
let n0_4 = require('./numbers-0-4.js');

let t=[0,0,0,0,0,0,0,0]; // times

let lim = 400;


// let s0 = new Date().getTime();
// for (var i=1; i !== lim; i++) {n0(i)}
// let f0 = new Date().getTime();
// t[0]=f0-s0;



// let s1 = new Date().getTime();
// for (var i=1; i !== lim; i++) {n0_1(i)}
// let f1 = new Date().getTime();
// t[1]=f1-s1;

// let s2 = new Date().getTime();
// for (var i=1; i !== lim; i++) {n0_2(i)}
// let f2 = new Date().getTime();
// t[2]=f2-s2;

// let s3 = new Date().getTime();
// for (var i=1; i !== lim; i++) {n0_3(i)}
// let f3 = new Date().getTime();
// t[3]=f3-s3;

let s4 = new Date().getTime();
for (var i=1; i !== lim; i++) {n0_4(i)}
let f4 = new Date().getTime();
t[4]=f4-s4;

// let s0 = new Date().getTime();
// for (var i=0; i < 100; i++) {n0(i)}
// let f0 = new Date().getTime();
// t[0]=f0-s0;


// let s0 = new Date().getTime();
// for (var i=0; i < 100; i++) {n0(i)}
// let f0 = new Date().getTime();
// t[0]=f0-s0;

// let s0 = new Date().getTime();
// for (var i=0; i < 100; i++) {n0(i)}
// let f0 = new Date().getTime();
// t[0]=f0-s0;

t.forEach((e,i)=>{

	console.log(i, e);

});