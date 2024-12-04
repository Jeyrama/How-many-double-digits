/*
Bob works for Yamazon as a barcode scanning specialist. 
Every day, armed with his trusty laser, his job is to scan 
barcodes of packages as they pass in front of him on a conveyor belt.

One day, his boss Beff Jezos tells him "There's been a big mixup with the new barcodes. 
We forgot to count every bardcode that had a repeating digit. 
Now we are short boxes but we dont know how many to order. 
I need you to hand count every barcode that has a double digit."

Yamazon barcodes are very long. 
Bob knows there are more labels to count then he has time in his life. 
Is there a way to keep his sanity and his job?

For this challenge, you will write a function that accepts an integer 'ndigit' representing the number of digits in a barcode. 
The function should return the total number of n-digit integers which contain a 'double digit' (the same digit twice in a row)".
Barcodes are numeric only (containing 0 - 9), and will not have leading zeroes (IE, a six digit barcode will start as 100000).

For example:
  If number of digits = 2, should return 9
  11,22,33,44,55,66,77,88,99

If number of digits = 3, should return 171:
  100,110,111,122,133... etc.

Expect large numbers with ndigits upwards of 10000, 
so execution time will be a factor. 
Dont bother trying to generate the entire list.
*/


// Solution

const numberOfDuplicateDigits = (ndigit) => {
  const totalNumbers = BigInt(9) * BigInt(10) ** BigInt(ndigit - 1);
  
  const countNoDoubleDigits = (n) => {
    if (n === 1) return BigInt(9);

    let prev = BigInt(9); 
    let current = BigInt(9) * BigInt(9);

    for (let i = 2; i < n; i++) {
      const next = current * BigInt(9); 
      prev = current;
      current = next;
    }
    return current;
  };

  const noDoubleDigits = countNoDoubleDigits(ndigit);
  const doubleDigitsCount = totalNumbers - noDoubleDigits;
  return doubleDigitsCount;
};

// or

const duplicateDigits = (ndigit) => {
  if (ndigit < 2) return 0n;
  const totalNumbers = 9n * 10n ** (BigInt(ndigit) - 1n);
  let nonDoubleDigits = 9n,
      lastDigitChoices = 9n;
  for (let i = 1; i < ndigit; i++) {
    nonDoubleDigits *= lastDigitChoices;
  }
  return totalNumbers - nonDoubleDigits;
}