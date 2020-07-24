function miniMaxSum_baseLevel(arr) {
    arr.sort(); // not optimized but casual way of writing code
    let maxSum = arr[arr.length-1];
    let minSum = arr[0];
    let midSum = 0;
    arr.pop();
    arr.shift();
    arr.forEach(function(e){
        midSum += e;
    });
    maxSum += midSum;
    minSum += midSum;
    console.log(minSum, maxSum);
}
function miniMaxSum_optimized(arr) {
    /** 
     * * instead of sorting, pass by with one loop.
     * * sum everything into one sum
     * * identify lows & highs in one loop
    */
    let sum = 0;
    let nLow = arr[0];
    let nHigh = arr[0];
    arr.forEach(function(e){
        if      (e > nHigh) nHigh = e;  
        else if (e < nLow)  nLow  = e;
        sum += e;
    });
    console.log(sum-nLow, sum-nHigh);
}
