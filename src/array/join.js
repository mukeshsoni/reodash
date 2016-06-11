import reduce from './reduce'

export default function join(arr, separator=',') {
    return reduce(arr, (acc, val, index) => {
        return acc === '' ? acc + val : `${acc}${separator}${val}`
    }, '')
}
