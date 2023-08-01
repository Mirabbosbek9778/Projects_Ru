//                  1-задиния

// function sostavChisla(
//   massivChisel: number[],
//   chislo: number
// ): Array<Array<number>> {
//   const result: Array<Array<number>> = [];

//   function findCombinations(
//     remaining: number[],
//     currentCombination: number[],
//     targetSum: number
//   ) {
//     if (targetSum === 0) {
//       result.push([...currentCombination]);
//       return;
//     }

//     if (targetSum < 0 || remaining.length === 0) {
//       return;
//     }

//     for (let i = 0; i < remaining.length; i++) {
//       const currentNum = remaining[i];
//       const newRemaining = remaining.slice(i + 1);
//       const newTargetSum = targetSum - currentNum;
//       if (newTargetSum >= 0) {
//         currentCombination.push(currentNum);
//         findCombinations(newRemaining, currentCombination, newTargetSum);
//         currentCombination.pop();
//       }
//     }
//   }

//   findCombinations(massivChisel, [], chislo);
//   return result;
// }

// // Тестовая функция для проверки работоспособности
// function runTests() {
//   const testCases: Array<[number[], number]> = [
//     [[1, 2, 3, 4, 5], 7],
//     [[2, 4, 6, 8, 10], 16],
//     [[3, 6, 9, 12, 15], 30],
//   ];

//   for (const [massivChisel, chislo] of testCases) {
//     const result = sostavChisla(massivChisel, chislo);
//     console.log(`Combinations for ${chislo}:`, result);
//   }
// }

// // Запуск тестов
// runTests();
////////////////////////////////////////////////////////////////
//                  2-задиния
/////////////////////////////////////

// function sostavChisla(massivChisel, chislo) {
//   const result = [];

//   function findCombinations(remaining, currentCombination, targetSum) {
//     if (targetSum === 0) {
//       result.push([...currentCombination]);
//       return;
//     }

//     if (targetSum < 0 || remaining.length === 0) {
//       return;
//     }

//     for (let i = 0; i < remaining.length; i++) {
//       const currentNum = remaining[i];
//       const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
//       const newTargetSum = targetSum - currentNum;
//       if (newTargetSum >= 0) {
//         currentCombination.push(currentNum);
//         findCombinations(newRemaining, currentCombination, newTargetSum);
//         currentCombination.pop();
//       }
//     }
//   }

//   findCombinations(massivChisel, [], chislo);
//   return result;
// }

// console.log(sostavChisla([8, 2, 3, 4, 6, 7, 1], 99));

/////////////////////////////////////////////////////////////////////////////

//                  3-задиния

// function runTests() {
//   const tests = [
//     {
//       chislo: 5,
//       massivChisel: [8, 2, 3, 4, 6, 7, 1],
//       result: [[2, 3], [4, 1]]
//     },
//
//   ];

//   let errors = 0;
//   for (const test of tests) {
//     let result;
//     try {
//       result = sostavChisla(test.massivChisel, test.chislo);

//       if (!compareArraysOfNumericArrays(result, test.result)) {
//         errors++;
//         console.log('--------------------------------------------')
//         console.log("failed for test", test, "Got result", result);
//       }
//     } catch (e) {
//       errors++;
//       console.log("failed for", test, 'exception', e.message);
//     }
//   }

//   if (errors === 0) {
//     console.log('runTests test successfuly completed');
//   } else {
//     console.log(`runTests test failed with ${errors} errors`);
//   }
// }

// runTests();
