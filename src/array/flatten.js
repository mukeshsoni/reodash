import reduce from './reduce'

export default function flatten(arr) {
    return reduce(arr, (acc, val) => {
        // concat flattens arguments passed to it. So if the array has other arrays, concat flattens it
        // so yes, concat does the hard work for first level flattening for us. which is awesome :)
        return acc.concat(val)
    }, [])
}
