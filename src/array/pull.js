import without from './without'

export default function pull(arr, ...toPull) {
    return without(arr, ...toPull)
}
