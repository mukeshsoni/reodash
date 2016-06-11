import reduce from './reduce'

export default function nth(arr, n=0) {
    return reduce(arr, (acc, val, index) => {
        return n === index ? val : acc
    }, undefined)
}
