// 2629. Function Composition
// 給定一個函數數組 [f1, f2, f3, ..., fn]，返回一個新函數 fn，它是函數數組的函數組合。
// [f(x), g(x), h(x)] 的函數組成為 fn(x) = f(g(h(x)))。
// 空函數列表的函數組合是恆等函數 f(x) = x。
// 您可以假設數組中的每個函數接受一個整數作為輸入並返回一個整數作為輸出。

// 1. for迴圈遞減的寫法
// function compose(functions) {
//    if (functions.length === 0) {
//       // 如果functions是空陣列，則返回恆等函數 (x)=>x。
//       return (x) => x;
//    }

//    return function (x) {
//       // 初次迭代的參數為x，第二次迭代的參數是上一次for迴圈的result
//       let result = x;

//       //設計一個 for遞減循环 (`for(初始,判斷,迭代)`)，陣列最後一個元素開始遍歷到第一項元素。
//       //由於希望從陣列最後一項Array[index]開始，陣列中末項元素的索引index 用 Array.lenth-1求出
//       //每次迭代，索引值-1，只要index>=0都會持續迴圈      
//       for (let i = functions.length - 1; i >= 0; i--) {

//          //調用函式陣列中的元素函式，每次調用都會返回新的result
//          result = functions[i](result);
//       }
//       return result;
//    };
// }

// 2. Array.reduceRight()的寫法
function compose(functions) {
   return function (x) {
       // 使用 reduceRight 遞減循環，從陣列最後一個元素開始遍歷到第一項元素
       //累加的初始參數是x，代入迭代的currentFunction後，返還result作為下一次函式的參數
      return functions.reduceRight((result, currentFunction) => {
         return currentFunction(result);
      }, x);
   };
}

// testcase
let functionsX = [x => x + 1, x => x * x, x => 2 * x];
let x = 4;
const composedFunction = compose(functionsX);
const result = composedFunction(x);
console.log(result);

//testcase
let functionsY = [y => 10 * y, y => 10 * y, y => 10 * y];
let y = 1;
const composedFunctionY = compose(functionsY);
const resultY = composedFunctionY(y);
console.log(resultY);

//testcase
let functionsZ = [];;
let z = 42;
const composedFunctionZ = compose(functionsZ);
const resultZ = composedFunctionZ(z);
console.log(resultZ);