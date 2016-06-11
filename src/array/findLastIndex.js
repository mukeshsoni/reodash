import reduce from './reduce'

export default function findLastIndex(arr, pred) {
    return reduce(arr, (acc, val, index) => {
        return pred(val) ? index : acc
    }, -1)
}
