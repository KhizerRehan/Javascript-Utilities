// ----------------------------------
(function() {
    const array = [1, 1, 2, 2, 3, 5, 5, 2];
    const uniqueValues = [...new Set(array)];
    console.log(uniqueValues);
}());

// ----------------------------------
(function() {
    const array = [1, 1, 2, 2, 3, 5, 5, 2];
    let uniqueValues = [];
    array.map(num => {
        if (Number.isInteger(num) && !uniqueValues.includes(num)) {
            uniqueValues.push(num)
        }
    });
    console.log(uniqueValues)
}());

// ----------------------------------