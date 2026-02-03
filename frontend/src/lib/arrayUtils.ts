export const getCyclicSlice = <T>(
	array: readonly T[],
	start: number,
	length: number,
): readonly T[] => {
	if (!array || array.length === 0) return []
	const doubled = [...array, ...array]
	return doubled.slice(start, start + length) as readonly T[]
}
