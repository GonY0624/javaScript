/* 프로토타입의 기능 */

const user = {
    id : 'user',
    login : function(){
        console.log(`${this.id} 님이 로그인되었습니다. `);
    }
};

const student = {
    __proto__ : user
};

// 프로토타입은 프로퍼티를 읽을 때만 사용하며, 프로퍼티를 추가, 수정, 삭제하는 연산은 객체에 집합한다. 
student.id = 'user01';
console.log(student);
// login 메소드 내의 this 는 프로토타입에 영향을 받지 않으며
// 메소드를 객체에서 호출했던, 프로토타입에서 호출했던 상관 없이
// this 는 언제나 . 앞에 있는 객체를 가리킨다. 
student.login();
// 메소드는 공유가 되지만, 객체의 상태는 공유 되지 않는다. 

for(let prop in student){
    console.log(prop);
}