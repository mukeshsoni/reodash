import reduce from './reduce'

export default function filter(arr, fn) {
    return reduce(arr, (acc, val) => {
        return fn(val) ? acc.concat(val) : acc
    }, [])
}
