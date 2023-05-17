/**
 * @ params {array} arrayData
 * @ params {string} insert
 * @ return {array} 문자열로 된 배열입니다.
 * 
 * 대건씨 미안해
 *  */
function first (arrayDate:string[], insert:string): string[]{
  //* 1. 첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다.

  //* 어떤 코드를 사용해서 최대건을 강지민으로 바꿔주는 형태
  //* 1. ...전개연산자 , 2. reduce() , 3. map() , 4. push()

  arrayDate.shift()
  let arr : string[] = [];
  arr = [insert, ...arrayDate]
  return arr

}

let data = ['최대건','정성철','허진','이세민'];
console.log(first(data,'강지민'));

first()