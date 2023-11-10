---
title: 'Array <-> List'
date: '2023-10-29'
---

```java
int[] <-> List<Integer>
```

1. Array -> List
```java
List<Integer> list = Arrays.stream(arr).boxed().collect(Collectors.toList());
```

2. List -> Array
```java
int[] arr = list.stream().mapToInt(Integer::intValue).toArray();
```

3. Array 의 부분 자르기
```java
int[] arr2 = Arrays.copyOfRange(arr, i, j);
```

4. List 의 부분 자르기
```java
List<Integer> list2 = new ArrayList<>(list.subList(i, j));
```
