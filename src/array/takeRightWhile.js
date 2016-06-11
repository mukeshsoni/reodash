import reverse from './reverse'
import takeWhile from './takeWhile'

export default function takeRightWhile(arr, pred) {
    return reverse(takeWhile(reverse(arr), pred))
}
