import reverse from './reverse'
import dropWhile from './dropWhile'

// pred - predicate function
export default function dropRightWhile(arr, pred) {
    return reverse(dropWhile(reverse(arr), pred))
}
