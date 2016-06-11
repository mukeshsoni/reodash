import reduce from './reduce'

export default function flattenDeep(arr) {
    return reduce(arr, (acc, val) => {
        if(Array.isArray(val)) {
            return acc.concat(flattenDeep(val))
        }

        return acc.concat(val)
    }, [])
}
