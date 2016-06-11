import take from './take'
import reverse from './reverse'

export default function takeRight(arr, n=1) {
    return reverse(take(reverse(arr), n))
}
