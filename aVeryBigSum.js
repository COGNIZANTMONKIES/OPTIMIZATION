function aVeryBigSum_baseLevel(ar) {
    let sum = 0;
    ar.forEach((number) => { sum += number; });
    return sum;
}
function aVeryBigSum_optimized(ar) {
    /** 
     * 
     * this will only work if arr values are > 0
     * 
    */
    let sum = 0;
    for (let i; (i = ar.pop()) && (sum += i); ) 
    return sum;
}
