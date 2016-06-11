import reduce from './reduce'

// pred - predicate function
export default function takeWhile(arr, pred) {
    return reduce(arr, (acc, val, index) => {
        // once condition stops working the length of accumulator will be less than index + 1
        // We stop using the predicate once it fails
        if(acc.length < index) {
            return acc
        }

        return pred(val, arr, index) ? acc.concat(val) : acc
    }, [])
}
