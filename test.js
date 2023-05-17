var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//* 매개변수를 배열로 받을 예정
//* typeof(arrayData) === string
function first(arrayDate, insert) {
    //* 1. 첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다.
    //* 어떤 코드를 사용해서 최대건을 강지민으로 바꿔주는 형태
    //* 1. ...전개연산자 , 2. reduce() , 3. map() , 4. push()
    arrayDate.shift();
    var arr = [];
    arr = __spreadArray([insert], arrayDate, true);
    return arr;
}
var data = ['최대건', '정성철', '허진', '이세민'];
console.log(first(data, '강지민'));
