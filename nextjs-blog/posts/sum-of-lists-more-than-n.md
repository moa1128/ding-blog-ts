---
title: 'n보다 커질때까지 더하기'
date: '2023-10-26'
---


![repeat_string_path](/nextjs-blog/public/images/sum-of-lists-more-than-n.png)

image 가 안나오지만 일단 미룰 수 없으므로 작성

기존 풀이
```java
class Solution {
    public int solution(int[] numbers, int n) {
        int answer = 0;
        for (int i = 0; i < numbers.length; i++) {
            if (answer > n) {
                break;
            } else {
                answer += numbers[i];
            }
        }

        return answer;
    }
}
```

더 나은 풀이 #1
```java
class Solution {
    public int solution(int[] numbers, int n) {
        int answer = 0;

        for (int i = 0; answer <= n; i++) {
            answer += numbers[i];
        }

        return answer;
    }
}
```
for 문 기준을 변경하여 if 문 없는 풀이