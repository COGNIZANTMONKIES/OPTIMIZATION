module.exports = function(n){

	let onesPlace;
	let tensPlace = 0;
	let tenIncrement = 0;

	let func=state1;

	function state1() {
		onesPlace = 5;
		func = state2;
	}
	function state2() {
		onesPlace = 0;
		tensPlace++;
		func = state1;
	}	
	for (let i = 0; i^n;i++) {
		//console.log(i);
		func();
		console.log((tensPlace * 10) + onesPlace);
	}
}