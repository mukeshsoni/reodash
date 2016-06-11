import reduce from './reduce'

export default function intersection(arr1, arr2) {
    return reduce(arr1, (acc, val) => {
        return arr2.indexOf(val) >= 0 ? acc.concat(val) : acc
    }, [])
}
