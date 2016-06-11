import reduce from './reduce'

export default function initial(arr) {
    return reduce(arr, (acc, val, index) => {
        return index === arr.length - 1 ? acc : acc.concat(val)
    }, [])
}
