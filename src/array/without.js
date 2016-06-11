import reduce from './reduce'

export default function without(arr, ...toRemove) {
    return reduce(arr, (acc, val) => {
        if(toRemove.indexOf(val) >= 0) {
            return acc
        }

        return acc.concat(val)
    }, [])
}
