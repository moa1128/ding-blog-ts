---
title: '뒤에서 5등까지'
date: '2023-10-26'
---


![sort_asc_path](/nextjs-blog/public/images/sort-asc-5.png)

image 가 안나오지만 일단 미룰 수 없으므로 작성

기존 풀이 (사실 못 품)
```java
import java.util.*;

class Solution {
    public int[] solution(int[] num_list) {
        Arrays.sort(num_list);
        return Arrays.copyOf(num_list, 5);
    }
}
```

더 나은 풀이 #1
```java
import java.util.*;

class Solution {
    public int[] solution(int[] num_list) {
        return Arrays.stream(num_list).sorted().limit(5).toArray();
    }
}
```
Arrays.stream 을 이용하여.. limit 있는 것을 이제 앎..

더 나은 풀이 #2
```java
import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        Arrays.sort(num_list);

        return Arrays.copyOfRange(num_list, 0, 5);
    }
}
```
import 상세 설정..
기존 구글링한 방법에서 range 를 지정해서 배열을 copy 하는 방식..