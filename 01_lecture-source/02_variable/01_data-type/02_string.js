/*  02. 문자열 타입
    문자열 타입은 텍스트 데이터를 나타내는데 사용한다.
    문자열은 작은따옴표(''), 큰따옴표(""), 또는 백틱(``)으로 텍스트를 감싼다.
    자바는 문자열을 객체로 표현하지만
    자바스크립트는 문자열을 원시 타입이며, 변경 불가능한 값이다.
*/ 

var string;
string = 'javaScript'; //작은 따옴표
string = "javaScript"; //큰 따옴표
string = `javaScript`; //백티

/* 템플릿 리터럴
    ESG 부터 도입된 멀티라인 문자열, 표현식 삽입 등의 편리한 문자열 처리 긴ㅇ을
    제공하는 문자열 표기법이다. 
    이걸 사용할 떄느 백티를 사용해서 표현한다. 
*/ 

// 일반 문자열 내에서는 줄바꿈이 허용되지 않는다.
//var str = '안녕하세요
//누구누구입니다.'

var str  = '안녕하세요\n반갑습니다.'
console.log(str);

var multiline = `안녕하세요
반갑습니다.`;
console.log(multiline);

var lastname = '정';
var firstname = '고은';

console.log('제이름은' + lastname + firstname+'입니다.');

// 표현식 삽입을 이용하면 문자열 연산자보다 가독성이 좋고 간편하게 문자열 조합 가능
console.log(`제이름은 ${lastname}${firstname} 입니다.`);
console.log('제이름은 ${lastname}${firstname} 입니다.');