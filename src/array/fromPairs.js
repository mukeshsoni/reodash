import reduce from './reduce'

export default function fromPairs(arr) {
    return reduce(arr, (acc, val) => {
        return Object.assign({}, acc, {
            [val[0]]: val[1]
        })
    }, {})
}
