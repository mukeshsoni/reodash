import reduce from './reduce'

export default function dropRight(arr, count=1) {
    return reduce(arr, (acc, val, index) => {
        return arr.length - index > count ? acc.concat(val) : acc
    }, [])
}
