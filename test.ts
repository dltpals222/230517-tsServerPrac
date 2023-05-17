function first (arrayDate){
  // 1. 첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다.
  let result = arrayDate[0];
  result = "강지민";
  let arr = arrayDate.unshift(result);
  return arr;
}

let data = ['최대건','정성철','허진','이세민'];
first(data)