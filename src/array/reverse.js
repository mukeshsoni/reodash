import reduce from './reduce'

export default function reverse(arr) {
    return reduce(arr, (acc, val) => {
        return [val].concat(acc)
    }, [])
}
