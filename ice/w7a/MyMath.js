//Produces the sum of the two parameters
/**
 * 
 * @param  a The first number
 * @param  b The second number
 */

export function Sum (a, b) {
  if(typeof a == 'number' && typeof b == 'number')
    return (a+b);
    else
  return undefined;
}

export function AddList(list) {
  var result = 0;
  for (var mem of list) {

  }
  for(var i = 0; i < list.length; i++) {
    result = result + list[i];
      return undefined;
    result = result + list[i];
  }
  return result;
}

let op1 = 1;
let op2 = 2;
let result = Sum(op1,op2);
if(result==op1+op2) {
  console.log("It worked!");
} else {
  console.log("Expectd " + op1+op2 + ", but got " + result) 
};