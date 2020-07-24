function timeConversion_baseLevel(s) {
    // assuming time format is const length
    // 07:05:45PM
    let hr = s.slice(0,2);
    let mn = s.slice(3,5);
    let sc = s.slice(6,8);
    let _2 = s.slice(8,10);

    if (_2 === "AM") {
        if (Number(hr)===12) {
            return `00:${mn}:${sc}`;
        }
        else {
            return `${hr}:${mn}:${sc}`;
        }
    }
    else if (_2 === "PM") {
        if (Number(hr) === 12) {
            return `12:${mn}:${sc}`;
        } else {
            hr = Number(hr) + 12;
            return `${hr}:${mn}:${sc}`;
        }
    } else {throw new Error()}
}
function timeConversion_optimized(s) {
    /**
     * * its unneccessary to slice each element
     * * assuming time format is const length
     * * we'll just access with array indexes
     * * also, no need to do a string to number conversion
     * * sadly strings are not easily modifiable like arrays so we must use interpolation
     */
    let hr = s[0] + s[1]; // s.slice(0,2); 
    let mn = s[3] + s[4]; // s.slice(3,5);
    let sc = s[6] + s[7]; // s.slice(6,8);
    let _2 = s[8] + s[9]; // s.slice(8,10);
    return      (_2 === "AM" && ( (hr === "12" && `00:${mn}:${sc}`) || `${hr}:${mn}:${sc}` )) 
                   || 
                (_2 === "PM" && ( (hr === "12" && `12:${mn}:${sc}`) || `${hr+12}:${mn}:${sc}` ))
}
