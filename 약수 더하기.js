function solution(n) {
  let answer = 0;
  for (i = 1; i <= n; i++){
   if(n % i == 0){
    console.log(i)
    answer += i
   }
    
  }
  return answer;
}
const n = 100
console.log(solution(n))