import reduce from './reduce'

export default function take(arr, n=1) {
    return reduce(arr, (acc, val, index) => {
        return n > index ? acc.concat(val) : acc
    }, [])
}
