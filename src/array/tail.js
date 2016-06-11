import reduce from './reduce'

export default function tail(arr) {
    return reduce(arr, (acc, val, index) => {
        return index === 0 ? acc : acc.concat(val)
    }, [])
}
