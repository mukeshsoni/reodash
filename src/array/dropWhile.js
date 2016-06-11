import reduce from './reduce'

// pred - predicate function
export default function dropWhile(arr, pred) {
    return reduce(arr, (acc, val, index) => {
        // non zero length for accumulator means the while condition stopped working somewhere.
        // We stop using the predicate once it fails
        if(acc.length > 0) {
            return acc.concat(val)
        }

        return pred(val, arr, index) ? acc : acc.concat(val)
    }, [])
}
