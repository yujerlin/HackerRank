function processData(input) {
    inputArray = input.split("\n");
    const numOfStrings = parseInt(inputArray[0]);
    const numOfQueries = parseInt(inputArray[numOfStrings+1]);
    const inputStrings = inputArray.slice(1, numOfStrings+1);
    const queryStrings = inputArray.slice(numOfStrings+2);

    let stringMap = createStringMappingObject(inputStrings);
    
    for(let i of queryStrings) {
        console.log(stringMap[i] || 0);
    }   
}

function createStringMappingObject(inputStrings) {
    let result = {};
    
    for (let i of inputStrings) {
        if (result[i]) {
            result[i] += 1;
        }
        else {
            result[i] = 1;
        }
    }
    
    return result;    
}
