/* 
    함수가 자기 자신 호출하는 것을 재귀호출 이라고 한다. 
    재귀호출을 수행하는 함수인 재귀함수는 반복되는 처리를 위해 사용한다. 
*/

// n! = 1 * 2 * ... * (n-1) * n;
function factorial(n){

    // n 이 1 이하일 떄 재귀 호출을 멈춘다. 
    if(n <= 1) return 1;

    return n * factorial(n-1);
}

console.log(factorial(2));
console.log(factorial(4));
