import { ArrowLeftPrev, ArrowRightNext, Plus } from '@/assets/icon'
import { TableBody, TableHeader } from '@/components'
import { AddButton, ButtonPeriodNav, SelectYear } from '@/components/ui'
import { MONTHS_EN, MONTHS_IN_YEAR, MONTHS_TO_DISPLAY } from '@/constants'
import { getCyclicSlice } from '@/lib'
import type { TableRow, TotalItem } from '@/types'
import { useMemo, useState } from 'react'

interface ReportTableProps {
	reportData: {
		total: TotalItem[]
		table: TableRow[]
	}
}

export const ReportTable = ({ reportData }: ReportTableProps) => {
	const [startMonthIndex, setStartMonthIndex] = useState(5)
	const [selectedYear, setSelectedYear] = useState('')

	const yearOptions = [
		{ value: '2025', label: '2025' },
		{ value: '2026', label: '2026' },
	]
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

	const handlePrev = () =>
		setStartMonthIndex(prev => (prev === 0 ? MONTHS_IN_YEAR - 1 : prev - 1))

	const handleNext = () =>
		setStartMonthIndex(prev => (prev === MONTHS_IN_YEAR - 1 ? 0 : prev + 1))

	return (
		<>
			<div className='flex justify-between'>
				<div className='flex justify-center items-center'>
					<SelectYear
						options={yearOptions}
						value={selectedYear}
						onChange={setSelectedYear}
						placeholder='year'
					/>
				</div>
				<div className='flex justify-end'>
					<ButtonPeriodNav
						onPrev={handlePrev}
						onNext={handleNext}
						prevIcon={<ArrowLeftPrev />}
						nextIcon={<ArrowRightNext />}
					/>
					<AddButton onClick={() => {}} icon={<Plus />} />
				</div>
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
