import reduce from './reduce'

export default function drop(arr, count=1) {
    return reduce(arr, (acc, val, index) => {
        return index < count ? acc : acc.concat(val)
    }, [])
}
