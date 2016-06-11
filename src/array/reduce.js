// TODO - write reduce for objects
export default function reduce(arr, fn, initialVal) {
    let acc = arguments.length === 3 ? initialVal : arr[0]
    let i = arguments.length === 3 ? 0 : 1

    return _reduce(arr.slice(i), fn, acc, i);
}

function _reduce(arr, fn, acc, index) {
    if(arr.length === 0) {
        return acc
    }

    return _reduce(arr.slice(1), fn, fn(acc, arr[0], index), index + 1)
}
