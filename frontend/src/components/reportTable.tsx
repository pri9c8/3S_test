import { MONTHS_EN, MONTHS_IN_YEAR, MONTHS_TO_DISPLAY } from '@/constants'
import { getCyclicSlice } from '@/lib'
import type { TableRow, TotalItem } from '@/types'
import { useMemo, useState } from 'react'
import { TableBody } from './tableBody'
import { TableHeader } from './tableHeader'

interface ReportTableProps {
	reportData: {
		total: TotalItem[]
		table: TableRow[]
	}
}

export const ReportTable = ({ reportData }: ReportTableProps) => {
	const [startMonthIndex, setStartMonthIndex] = useState(5)

	const visibleMonths = useMemo(
		() => getCyclicSlice(MONTHS_EN, startMonthIndex, MONTHS_TO_DISPLAY),
		[startMonthIndex, MONTHS_TO_DISPLAY],
	)

	const filteredTotal = useMemo(
		() => getCyclicSlice(reportData.total, startMonthIndex, MONTHS_TO_DISPLAY),
		[reportData.total, startMonthIndex, MONTHS_TO_DISPLAY],
	)

	const filteredManagers = useMemo(
		() =>
			reportData.table.map(manager => ({
				...manager,
				months: getCyclicSlice(
					manager.months,
					startMonthIndex,
					MONTHS_TO_DISPLAY,
				),
			})),
		[reportData.table, startMonthIndex, MONTHS_TO_DISPLAY],
	)

	const handlePrevPeriod = () =>
		setStartMonthIndex(prev => (prev === 0 ? MONTHS_IN_YEAR - 1 : prev - 1))

	const handleNextPeriod = () =>
		setStartMonthIndex(prev => (prev === MONTHS_IN_YEAR - 1 ? 0 : prev + 1))

	return (
		<>
			<div className='flex justify-center gap-3 p-4 bg-gray-50 border-y border-gray-200 mb-4 mx-auto'>
				<button
					onClick={handlePrevPeriod}
					className='px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors'
				>
					← Previous period
				</button>
				<button
					onClick={handleNextPeriod}
					className='px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors'
				>
					Next period →
				</button>
			</div>

			<div className='overflow-x-auto rounded-lg border border-gray-200 mx-auto'>
				<table className='min-w-full divide-y divide-gray-200'>
					<TableHeader months={visibleMonths} />
					<TableBody total={filteredTotal} managers={filteredManagers} />
				</table>
			</div>
		</>
	)
}
