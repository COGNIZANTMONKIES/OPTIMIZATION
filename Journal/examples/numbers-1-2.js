module.exports = function(n){

	let i = 0;
	let onesPlace;
	let tensPlace = 0;
	let tenIncrement = 0;

	for (let i = 0; i^n;i++) {
		//console.log(i);
		if (i&1) {
			onesPlace = 5;
		}
		else {
			onesPlace = 0;
			tensPlace++;
		}
		console.log((tensPlace * 10) + onesPlace);
	}
}