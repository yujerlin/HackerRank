function processData(input) {
    //Enter your code here
    inputs = input.split(" ");
    let n = parseInt(inputs[0]);
    let m = parseInt(inputs[1]);
    
    let primes = findAllPrimesInRange(n, m);
    console.log(countTwins(primes));
} 

function countTwins(primes) {
    let count = 0;
    
    for (let i=1; i<primes.length; i++) {
        if (primes[i] - primes[i-1] == 2) {
            count++;
        }        
    }
    
    return count;
}


function findAllPrimesInRange(n, m) {
    let primes = [];
    
    for (let i=n; i<=m; i++) {
        if (isPrime(i)) {
            primes.push(i);   
        }
    }
    
    return primes;
}

function isPrime(n) {
    if (n % 2 == 0) {
        return false;
    }
    
    for (let i =3; i < n; i = i+2) {
        if (n % i == 0) {
            return false;
        }
    }
    
    return true;
}
