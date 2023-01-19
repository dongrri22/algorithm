/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.03ms, 33.6MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.03ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.06ms, 33.5MB)
테스트 6 〉	통과 (0.05ms, 33.5MB)
테스트 7 〉	통과 (0.03ms, 33.5MB)
테스트 8 〉	통과 (0.03ms, 33.6MB)
테스트 9 〉	통과 (0.03ms, 33.5MB)
테스트 10 〉	통과 (0.03ms, 33.5MB)
테스트 11 〉	통과 (0.03ms, 33.5MB)
테스트 12 〉	통과 (0.05ms, 33.5MB)
테스트 13 〉	통과 (0.03ms, 33.5MB)
테스트 14 〉	통과 (0.03ms, 33.6MB)
테스트 15 〉	통과 (0.04ms, 33.5MB)
테스트 16 〉	통과 (0.05ms, 33.6MB)
테스트 17 〉	통과 (0.04ms, 33.5MB)
테스트 18 〉	통과 (0.03ms, 33.7MB)
효율성  테스트
테스트 1 〉	통과 (0.03ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.03ms, 33.4MB)
테스트 5 〉	통과 (0.03ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.03ms, 33.4MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.04ms, 33.5MB)
테스트 10 〉	통과 (0.03ms, 33.4MB)
채점 결과
정확성: 60.0
효율성: 40.0
합계: 100.0 / 100.0
 */

function solution(n) {
  let battery = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      battery++;
      n--;
    } else n /= 2;
  }
  return battery;
}
// n이 짝수면 n / 2
// n이 홀수면 (n-1) / 2

//다른 사람의 풀이
// 2진수로 변환하여 자릿수 모두 더하기
function solution(n) {
  if (n === 1) return 1;
  const nArr = Array.from(n.toString(2));
  return nArr.reduce((a, b) => +a + +b);
}
