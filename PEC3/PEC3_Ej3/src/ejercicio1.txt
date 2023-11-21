Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones 
y salidas indicadas en los comentarios.


function printArray(array:Array<number>):void{
	//code to print the array on console
       /***/
}

let array:number[]=[2,3,4];
console.log(/***/); //2
printArray(array); // 3,4
/***/
printArray(array); // 3,4,5
console.log(/***/); //5
printArray(array); // 3,4
/***/
printArray(array); // 3,4,1
/***/
printArray(array); // 8,3,4,1
/** check if every number is greater than 3 */
let everyisgreater = /***/;
console.log(everyisgreater);  //false
/** check if every number is less than 10 */
let everyisless = /***/;
console.log(everyisless);  //true
console.log(array.sort()); //1,3,4,8
console.log(/***/); //8,4,3,1
