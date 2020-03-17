/**
 * 1. 编写一个程序，打印 1 - 100 的数字
 * 2. 如果遇到能被 3 整除的数，则打印 Fizz
 * 3. 如果遇到能被 5 整除的数，则打印 Buzz
 * 
 * 写一个测试用例检测结果
 */

function printNumbers(start, end) {
  const numbers = {};
  for (let i = start; i <= end; i++) {
    let pushItem = i;
    if (pushItem % 3 === 0) pushItem = 'Fizz';
    if (pushItem % 5 === 0) pushItem = 'Buzz';
    numbers[i] = pushItem;
  }
  return numbers;
}

// console.log(printNumbers(1, 100));

function tester(start, end) {
  const numberGroup = printNumbers(start, end);
  let isPass = true;
  Object.keys(numberGroup).forEach((numb) => {
    switch (numberGroup[numb]) {
      case 'Fizz':
        numb % 3 === 0 ? null : isPass = false;
        break;
      case 'Buzz':
        numb % 5 === 0 ? null : isPass = false;
        break;
      default:
    }
  });
  return isPass;
}

console.log(tester(1, 1000));
console.log(tester(100, 2000));
