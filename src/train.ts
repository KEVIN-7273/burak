/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& MIT TASK O &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
function calculateSumOfNumbers(arr: any[]): number {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    if (typeof arr[i] === "number") {
      sum = sum + arr[i];
    }
    i++;
  }
  return sum;
}

console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
console.log(calculateSumOfNumbers([false, "69", { son: 30 }, true, 36]));
console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 95]));

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& MIT TASK N &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/* Shunday function yozing, u string qabul qilsin va string palindrom yani 
togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz 
ekanligini aniqlab boolean qiymat qaytarsin. MASALAN: 
palindromCheck("dad") return true; palindromCheck("son") return false. */

// function palindromCheck(word: string): boolean {
//   let reversed = "";
//   let i = word.length - 1;
//   while (i >= 0) {
//     reversed = reversed + word[i];
//     i--;
//   }
//   return word === reversed;
// }
// console.log(palindromCheck("Assalom"));
// console.log(palindromCheck("DaD"));
// console.log(palindromCheck("2002"));

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& MIT TASK M &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*M-TASK
Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin 
va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni 
kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni 
array ichida qaytarsin. MASALAN: getSquareNumbers([1, 2, 3])
 return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]*/

// function getSquareNumbers(numberArray: number[]) {
//   return numberArray.map((ele) => {
//     return {
//       number: ele,
//       square: ele * ele,
//     };
//   });
// }

// console.log(getSquareNumbers([1, 2, 3]));

/* PROJECT STANDARTS:
  - Logging standarts 
  - Naming standarts 

      Function, method, variable => caMel case
      class => PasCal
      folder => ke-bab
      css => s_nake

  - Error handling   
*/

/* 
  Traditional API
  Rest API
  GraphQL API
  ...
*/
