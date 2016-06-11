import reduce from './reduce'

export default function remove(arr, pred) {
    return reduce(arr, (acc, val) => {
        return pred(val) ? acc : acc.concat(val)
    }, [])
}
