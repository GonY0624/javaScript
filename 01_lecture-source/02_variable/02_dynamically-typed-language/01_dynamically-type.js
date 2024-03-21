/* 정적타입(static/strong type) 언어(c, c++, java, Kotlin 등) 
    변수를 선언할 때 데이터 타입을 사전에 선언(명시적)해야 한다.
    변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만
    할당할 수 있다.
    컴파일 시점에 타입 체크를 수행하는 데 타입의 일관성을 강제하여 
    런타임 시 에러를 줄인다.
*/

/* 동적타입(synamic/weak type) 언어 (javaScript, Python 등) 
    자바 스크립트는 var, Let, const 키워드를 사용해 변수를 선언할 뿐
    데이터 타입을 사전에 선언하지 않는다.
    즉, 동적 타입 언어는 변수 선언이 아닌 할당에 의해 타입이 결정(타입 추론) 되며
    재할당에 의해 변수의 타입이 언제든지 동적으로 변할 수 있다. 
    개발자의 의도와 상관 없이 자바스크립트 엔진에 의해 암묵적으로 타입이 
    자동으로 변환되기도 하기 떄문에 , 유연성은 높지만 신뢰성이 떨어진다.
*/

var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = 'javaScript';
console.log(typeof test);

test = {};
console.log(typeof test);

test = [];
console.log(typeof test);

test = function(){};
console.log(typeof test);