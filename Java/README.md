# Java Version
-

###Constructor

```java
BinaryUtils bu = new BinaryUtils(236)
//or
BinaryUtils bu = new BinaryUtils("11101100")
```

###Get the first N bits

```java
bu.prefix(N)
```

###Get the Middle N bits

```java
bu.middle(beginIndex, N)
```

###Get the Last N bits

```java
bu.suffix(beginIndex, N)
```

###Set the Middle N bits to B(decimal)

```java
bu.replace(beginIndex, N, B)
```
###Print in Binary form

```java
bu.print()

//or use the static method
BinaryUtils.print(N)
```