export const formatNumberWithSpaces = (
	value: number | null | undefined,
): string => {
	if (value == null) return 'No data'
	const sign = value < 0 ? '-' : ''
	const abs = Math.abs(value)
	const [intPartRaw, fracPart] = String(abs).split('.')
	const intPart = intPartRaw.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	return fracPart ? `${sign}${intPart}.${fracPart}` : `${sign}${intPart}`
}

export const formatMoney = (value: number | null | undefined): string => {
	if (value == null) return 'No data'
	return `$ ${formatNumberWithSpaces(value)}`
}

export const getValueTextClass = (monthIndex: number): string => {
	return monthIndex < 4 ? 'text-gray-300' : 'text-gray-700'
}

export const getHeaderTextClass = (
	monthIndex: number,
	variant: 'head' | 'sub',
): string => {
	if (monthIndex < 4) return 'text-gray-300'
	return variant === 'head' ? 'text-gray-700' : 'text-gray-500'
}
