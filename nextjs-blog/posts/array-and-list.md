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