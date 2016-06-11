import reduce from './reduce'

export default function findIndex(arr, pred) {
    return reduce(arr, (acc, val, index) => {
        if(acc >= 0) {
            return acc
        }

        return pred(val) ? index : acc
    }, -1)
}
