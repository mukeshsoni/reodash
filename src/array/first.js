import reduce from './reduce'

export default function first(arr) {
    return reduce(arr, (acc, val, index) => {
        return index === 0 ? val : acc
    }, undefined)
}
