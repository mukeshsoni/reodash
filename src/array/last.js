import reduce from './reduce'

export default function last(arr) {
    return reduce(arr, (acc, val, index) => index === arr.length - 1 ? val : acc, undefined)
}
