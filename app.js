// CREATE FUNCTION THAT FILTERS OUT NEGATIVE #

// arrays always use []
var arrayNum = [1, 5, -9, 2, -4]; // creating our var & value
console.log(arrayNum); // here we want to see our var output

arrayNum = arrayNum.filter(function(x) { // creating function to filter out neg. #
    //arrayNum.filter tells function to take in a function that will be filtering out neg # in the orginal array.
    return x > -1 // here we tell it to filter out anything greater than -1
    });
    console.log(arrayNum); // here we ask for what output we are looking for (from Variable.)