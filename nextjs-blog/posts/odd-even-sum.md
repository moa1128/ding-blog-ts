---
title: '이어 붙인 수'
date: '2023-11-05'
---


![odd_even_sum_path](/images/odd-even-sum.png)

기존 풀이
```java
import java.util.*;

class Solution {
    public int solution(int[] num_list) {
        StringBuilder sb1 = new StringBuilder();
        StringBuilder sb2 = new StringBuilder();
        for (int i = 0; i < num_list.length; i++) {
            int num = num_list[i];
            if (num % 2 == 0) {
                sb1.append(num);
            } else {
                sb2.append(num);
            }
        }
        int answer = Integer.parseInt(sb1.toString()) + Integer.parseInt(sb2.toString());
        return answer;
    }
}
```

더 나은 풀이 #1
```java
class Solution {
    public int solution(int[] num_list) {
        int answer = 0;

        int even = 0;
        int odd = 0;

        for(int num : num_list) {
            if(num % 2 == 0) {
                even *= 10;
                even += num;
            } else {
                odd *= 10;
                odd += num;
            }
        }
        answer = even + odd;

        return answer;
    }
}
```
숫자에 10을 곱하는 신박한 방법
뿐만 아니라 변수명을 의미있게 지어야 하는 것을 다시 한 번 깨달음

더 나은 풀이 #2
```java
import java.util.*;

class Solution {
    public int solution(int[] num_list) {
        StringBuffer even = new StringBuffer(), odd = new StringBuffer();
        for (int num : num_list)
            if (num % 2 == 0) even.append(num);
            else odd.append(num);
        return Integer.parseInt(even.toString()) + Integer.parseInt(odd.toString());
    }
}
```
나의 풀이와 비슷하지만 좀 더 간결하게 표현함