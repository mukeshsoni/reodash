import reduce from './reduce'

export default function difference(arr1, arr2) {
    return reduce(arr1, (acc, val) => {
        return arr2.indexOf(val) >= 0 ? acc : acc.concat(val)
    }, [])
}
