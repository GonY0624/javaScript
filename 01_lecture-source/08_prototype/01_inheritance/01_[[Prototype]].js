// [[Prototype]]

/*
    자바스크립트의 객체는 [[Prototype]] 이라는 숨김 프로퍼티를 갖는다. 
    이 프로퍼티의 값은 null 이거나 다른 객체에 대한 참조가 되는데
    참조 대상을 프로토타입(prototype) 이라고 부른다. 
    object 에서 프로퍼티를 읽으려고 할 때, 해당 프로퍼티가 없으면 자바스크립트는
    자동으로 프로토 타입에서 프로퍼티를 찾는다.
    이것을 프로토타입 상속이라고 한다.
    즉 자바에서 상속과 비슷한 개념이다. 
*/

const user = {
    activate : true,
    login : function(){
        console.log('로그인이 되었습니다~~');
    }
};

const student = {
    passion : true
};

student.__proto__ = user;

console.log(student.activate);
