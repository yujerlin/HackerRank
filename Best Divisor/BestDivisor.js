function main() {
    var n = parseInt(readLine());
    console.log(findBestDivisor(n));
}

function findBestDivisor(n) {
    let divisors = findAllDivisors(n);
    let maxSum = 0;
    let bestDivisor = 0;
    
    divisors.forEach((n) => {             
        if (findDigitsSum(n) == maxSum) {
            if (n < bestDivisor) {
                bestDivisor = n;
            }
        }
        if (findDigitsSum(n) > maxSum) {
            maxSum = findDigitsSum(n);
            bestDivisor = n;
        }
    });
    
    return bestDivisor;
}


function findAllDivisors(n) {
    let divisors = [];
    
    for (let i=1; i <= n; i++) {
        if (n % i == 0) {
            divisors.push(i);
        }        
    }
    return divisors;   
}

function findDigitsSum(n) {
    if (n < 10) {
        return n;
    }

    return findDigitsSum(Math.floor(n/10)) + (n % 10);
}

