import reduce from './reduce'

export default function fill(arr, valToFill, start=0, end) {
    end = end || arr.length

    return reduce(arr, (acc, val, index) => {
        // return original value if index out of range
        if(index < start || index >= end) {
            return acc.concat(val)
        }

        return acc.concat(valToFill)
    }, [])
}
