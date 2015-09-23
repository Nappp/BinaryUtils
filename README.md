# BinaryUtils
A utility helps manipulating binary bits


## Java Version

###Constructor

```language-java
BinaryUtils bu = new BinaryUtils(236)
//or
BinaryUtils bu = new BinaryUtils("11101100")
```

###Get the first N bits

```language-java
bu.prefix(N)
```

###Get the Middle N bits

```language-java
bu.middle(beginIndex, N)
```

###Get the Last N bits

```language-java
bu.suffix(beginIndex, N)
```

###Set the Middle N bits to B(decimal)

```language-java
bu.replace(beginIndex, N, B)
```
###Print in Binary form

```language-java
bu.print()

//or use the static method
BinaryUtils.print(N)
```