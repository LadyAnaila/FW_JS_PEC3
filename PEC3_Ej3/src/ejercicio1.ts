//Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones  y salidas indicadas en los comentarios.


function printArray(array: Array<number>): void {
       console.log(array.join(','));
   }
   
   let array: number[] = [2, 3, 4];
   
   console.log(array[0]); // 2
   
   printArray(array.slice(1)); // 3,4
   console.log(array[1], array[2]); // 3 4
   
   array.push(5);
   printArray(array); // 3,4,5
   console.log(array[array.length - 1]); // 5
   array.pop();
   printArray(array); // 3,4
   
   array.push(1);
   printArray(array); // 3,4,1
   
   array.unshift(8);
   printArray(array); // 8,3,4,1
   
   /** check if every number is greater than 3 */
   let everyisgreater = array.every(num => num > 3);
   console.log(everyisgreater); // false
   
   /** check if every number is less than 10 */
   let everyisless = array.every(num => num < 10);
   console.log(everyisless); // true
   
   console.log(array.slice().sort()); // 1,3,4,8
   console.log(array.slice().sort((a, b) => b - a)); // 8,4,3,1
