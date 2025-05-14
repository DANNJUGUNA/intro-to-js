function isPrime(n) {
  while(n <= 1) return false;
  let i = 2;
  while (i * i <= n) {
    if (n % i === 0) return false;
    i++;
  }
  return true;
}

console.log("Is 29 prime?", isPrime(-29));
console.log("Is 12 prime?", isPrime(12)); 
