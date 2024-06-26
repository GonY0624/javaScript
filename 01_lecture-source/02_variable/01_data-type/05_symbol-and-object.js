/* Symbol xkdlq
    심벌은 es6 에서 추가된 7번 쩨 타입으로, 변경 불가능한 원시 타입의 값읻. 
    다른 값돠 중복되지 않는 유일무이한 값으로 이름 충돌할 위험이 없는
    객체의 유일한 프로퍼티 키를 만들기 위해 사용한다. 
    심벌 이외의 원시 값은 리터럴응 통해 생성하지만 심벌은 symbol 함수를 통해 생성한다
*/

var key = Symbol('key');
console.log(typeof key);

// 객체 생성
// 객체 리터럴 이라고 부른다. 자바에서는 {}코드블럭을 의미하지만 자바스크립트느느 좀 다르다.
var obj = {};

// 이름이 충돌할 위험이 없는 유일한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]);

/* 자바스크립트의 데이터타입은 크게 원시 타입과 객체 타입으로 분류한다.
    number, string, boolean, undefined, null, symbol 6가지 타입을 
    제외한 나머지 값은 모두 객체 타입
*/
