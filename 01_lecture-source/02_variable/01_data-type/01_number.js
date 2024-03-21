
// 정수, 실수, 음수 모두 숫자 타입이다.
var integer =10;
var double = 5.5;
var negtive =-10;

//=== 값과 타입 모두 일치
console.log(10 === 10.0);

// 실수로 처리가 되기 떄문에 소수점까지 처리가 된다.
console.log(10 / 4);

/* 숫자 타입은 푸가적으로 세 가지 특별한 값도 표현할 수 있다.
    infinity : 양의 무한대
    -infinity : 음의 무한대
    NaN : 산술 연산 불가(not-a-number)
*/

console.log(10 / 0);

console.log(10 / -0);

console.log(1 * '문자열');
