import { formatMoney, formatNumberWithSpaces, getValueTextClass } from '@/lib'
import type { TableRow, TotalItem } from '@/types'
import type { FC } from 'react'
import { Fragment } from 'react'

interface TableBodyProps {
	total: readonly TotalItem[]
	managers: readonly TableRow[]
}

export const TableBody: FC<TableBodyProps> = ({ total, managers }) => {
	return (
		<tbody>
			<tr className='border-b-0'>
				<td
					className='px-6 py-4 border-r border-gray-200 whitespace-nowrap align-middle'
					rowSpan={2}
				>
					<div className='h-full flex items-center'>
						<div className='text-sm font-medium text-gray-900'>Manager</div>
					</div>
				</td>
				<td className='px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap'>
					Total income:
				</td>
				{total.map((item, i) => (
					<td
						key={`total-income-${i}`}
						className='border-l border-gray-200 p-0'
						colSpan={2}
					>
						<div className='grid grid-cols-2'>
							<div
								className={`px-2 py-4 text-center text-xs font-semibold leading-none whitespace-nowrap ${getValueTextClass(i)}`}
							>
								{formatMoney(item.plan.income)}
							</div>
							<div
								className={`px-2 py-4 text-center text-xs font-semibold leading-none whitespace-nowrap ${getValueTextClass(i)}`}
							>
								{formatMoney(item.fact.income)}
							</div>
						</div>
					</td>
				))}
				<td className='w-12 border-l border-gray-200 p-0' />
			</tr>
			<tr className='border-b border-gray-200 bg-white'>
				<td className='px-6 py-4 text-sm font-medium text-gray-900 border-r whitespace-nowrap border-t border-gray-200'>
					Total active partners:
				</td>
				{total.map((item, i) => (
					<td
						key={`total-partners-${i}`}
						className='border-l border-gray-200 p-0'
						colSpan={2}
					>
						<div className='grid grid-cols-2'>
							<div
								className={`px-2 py-4 text-center text-xs font-semibold leading-none whitespace-nowrap ${getValueTextClass(i)}`}
							>
								{formatNumberWithSpaces(item.plan.activePartners)}
							</div>
							<div
								className={`px-2 py-4 text-center text-xs font-semibold leading-none whitespace-nowrap ${getValueTextClass(i)}`}
							>
								{formatNumberWithSpaces(item.fact.activePartners)}
							</div>
						</div>
					</td>
				))}
				<td className='w-12 border-l border-gray-200 p-0' />
			</tr>
			{managers.map(manager => (
				<Fragment key={manager.id}>
					<tr className='border-b-0'>
						<td
							className='px-6 py-4 border-r border-gray-200 whitespace-nowrap align-middle'
							rowSpan={2}
						>
							<div className='h-full flex items-center'>
								<div className='text-sm font-medium text-gray-900'>
									{manager.adminName}
								</div>
							</div>
						</td>
						<td className='px-6 py-4 text-sm text-gray-500 border-r border-gray-200 whitespace-nowrap'>
							Income:
						</td>
						{manager.months.map((monthData, i) => {
							if (!monthData) {
								return (
									<td
										key={`m-${manager.id}-nodata-${i}`}
										className='border-l border-gray-200 p-0'
										colSpan={2}
										rowSpan={2}
									>
										<div className='h-full px-6 py-4 flex items-center justify-start text-left text-xs font-semibold leading-none whitespace-nowrap text-gray-300'>
											No data
										</div>
									</td>
								)
							}
							return (
								<td
									key={`m-${manager.id}-i-${i}`}
									className='border-l border-gray-200 p-0'
									colSpan={2}
								>
									<div className='grid grid-cols-2'>
										<div
											className={`px-2 py-4 text-center text-xs font-semibold leading-none whitespace-nowrap ${getValueTextClass(i)}`}
										>
											{formatMoney(monthData.plan.income)}
										</div>
										<div
											className={`px-2 py-4 text-center text-xs font-semibold leading-none whitespace-nowrap ${getValueTextClass(i)}`}
										>
											{formatMoney(monthData.fact.income)}
										</div>
									</div>
								</td>
							)
						})}
						<td
							className='w-12 border-l border-gray-200 p-0 align-middle'
							rowSpan={2}
						>
							<div className='h-full flex items-center justify-center'>
								<span className='text-gray-400 text-lg font-bold'>⋯</span>
							</div>
						</td>
					</tr>
					<tr className='border-b border-gray-200'>
						<td className='px-6 py-4 text-sm text-gray-500 border-r whitespace-nowrap border-t border-gray-200'>
							Active partners:
						</td>
						{manager.months.map((monthData, i) => {
							if (!monthData) return null
							return (
								<td
									key={`m-${manager.id}-p-${i}`}
									className='border-l border-gray-200 p-0'
									colSpan={2}
								>
									<div className='grid grid-cols-2'>
										<div
											className={`px-2 py-4 text-center text-xs font-semibold leading-none whitespace-nowrap ${getValueTextClass(i)}`}
										>
											{formatNumberWithSpaces(monthData.plan.activePartners)}
										</div>
										<div
											className={`px-2 py-4 text-center text-xs font-semibold leading-none whitespace-nowrap ${getValueTextClass(i)}`}
										>
											{formatNumberWithSpaces(monthData.fact.activePartners)}
										</div>
									</div>
								</td>
							)
						})}
					</tr>
				</Fragment>
			))}
		</tbody>
	)
}
