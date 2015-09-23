# JavaScript Version
-

###Constructor

```javascript
var bu = new BinaryUtils(236)
//or
var bu = new BinaryUtils("11101100")
```

###Get the first N bits

```javascript
bu.prefix(N)
```

###Get the Middle N bits

```javascript
bu.middle(beginIndex, N)
```

###Get the Last N bits

```javascript
bu.suffix(beginIndex, N)
```

###Set the Middle N bits to B(decimal)

```javascript
bu.replace(beginIndex, N, B)
```
###Print in Binary form

```javascript
bu.print()

```