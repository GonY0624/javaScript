/* 자바스크립트 엔진은 불리언 타입이 아닌 값을 truthy 값 (참으로 평가되는 값)
    또는 Falthy 값(거짓으로 평가되는 값) 으로 구분을 한다.
*/
//Truthy -> true, Falthy -> false 로 암묵적 타입 변환이 된다. 
console.log("===============논리 타입 변환==================")
if(true) console.log("if(true)");
if(false) console.log("if(false)");
if(undefined) console.log('if(undefined)');
if('') console.log("if('')");
if('java') console.log("if('java')");

// Falthy 값 : false, undefined, null, 0, NaN, ''(빈 문자열)
// Truthy 값 : Falthy 값 제외 모든 값.