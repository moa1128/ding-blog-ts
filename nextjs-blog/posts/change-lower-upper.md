---
title: '대소문자 바꿔서 출력하기'
date: '2023-11-05'
---


![change_lower_upper_path](/nextjs-blog/public/images/lower-upper.png)

기존 풀이 (사실 처음에 못 품)
```java
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < a.length(); i++) {
            char c = a.charAt(i);
            if (Character.isUpperCase(c)) {
                sb.append(Character.toLowerCase(c));
            } else {
                sb.append(Character.toUpperCase(c));
            }
        }

        System.out.print(sb.toString());
    }
}
```

더 나은 풀이 #1
```java
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String answer = "";

        for(Character c : a.toCharArray()){
            if(Character.isUpperCase(c)){
                answer += Character.toLowerCase(c);
            }
            else if(Character.isLowerCase(c)){
                answer += Character.toUpperCase(c);
            }
        } 

        System.out.println(answer);
    }
}
```
String 값을 toChartArray() 로 Char 형 Array 로 변경할 수 있음
Character.isUpperCase(c)/Character.isLowerCase(c) 로 해당 문자가 대문자/소문자 인지 구별할 수 있음
String 은 str.toUpperCase()/str.toLowerCase()
Character 은 Character.toUpperCate(c)/Character.toLowerCase(c) 로 대소문자 변환 가능
