export default function(arr, fn, initialVal) {
    let acc = initialVal ? initialVal : arr[0]
    let i = initialVal ? 0 : 1

    for( ; i < arr.length; i++) {
        acc = fn(acc, arr[i])
    }

    return acc
}
