---
title: '문자열 반복해서 출력하기'
date: '2023-10-26'
---


![repeat_string_path](/nextjs-blog/public/images/repeat-string.png)

image 가 안나오지만 일단 미룰 수 없으므로 작성

기존 풀이
```java
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.print(str);
        }
    }
}
```

더 나은 풀이 #1
```java
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int n = sc.nextInt();
        System.out.println(str.repeat(n));
    }
}
```
String.repeat(n) 함수 사용하여 깔끔하게 작성

더 나은 풀이 #2
```java
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int n = sc.nextInt();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++){
            sb.append(str);
        }
        String s = sb.toString();
        System.out.println(s);
    }
}
```
StringBuilder 를 이용하여 문자열 연결 후 출력하는 것이 더 좋아보임