# reodash === 'reduce lodash'

[Lodash](https://lodash.com/) is a great library and has made the adoption of functional programming easier in javascript world. It was itself inspired by [underscore](http://underscorejs.org/), of course.

Implementing lodash methods by yourself is a fun exercise, which i think every javascript programmer should try to do. But what about implementing lodash methods just using a single function - `reduce`? Is it even possible? I am starting the journey to find out.

Some examples -

#### Implementing `map` with `reduce`
```javascript
function map(arr, fn) {
    return reduce(arr, (acc, val) => {
        return acc.concat(fn(val))
    }, [])
}
```

#### Implementing `reverse` with `reduce`
```javascript
function reverse(arr) {
    return reduce(arr, (acc, val) => {
        return [val].concat(acc)
    }, [])
}
```

#### Implementing `dropRight` with `reduce`
```javascript
function dropRight(arr, count=1) {
    return reduce(arr, (acc, val, index) => {
        return arr.length - index > count ? acc.concat(val) : acc
    }, [])
}
```

P.S. - `reduce` has super powers and the earlier you realize it, the better.
