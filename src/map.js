import reduce from './reduce'

export default function map(arr, fn) {
    return reduce(arr, (acc, val) => {
        return acc.concat(fn(val))
    }, [])
}
