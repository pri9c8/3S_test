import { getHeaderTextClass } from '@/lib'
import type { FC } from 'react'

interface TableHeaderProps {
	months: readonly string[]
}

export const TableHeader: FC<TableHeaderProps> = ({ months }) => {
	return (
		<thead className='bg-gray-50'>
			<tr className='border-b border-gray-200'>
				<th
					scope='col'
					className='px-6 py-4 text-left text-sm font-medium text-gray-700 w-48 border-r border-gray-200'
				/>
				<th
					scope='col'
					className='px-6 py-4 text-left text-sm font-medium text-gray-700 w-32 border-r border-gray-200'
				>
					<span className='sr-only'>Metric</span>
				</th>

				{months.map((month, i) => (
					<th
						key={month}
						scope='col'
						colSpan={2}
						className='border-l border-gray-200 p-0'
					>
						<div className='px-2 py-4'>
							<div
								className={`mb-2 text-center text-sm font-medium ${getHeaderTextClass(i, 'head')}`}
							>
								{month}
							</div>
							<div className='grid grid-cols-2'>
								<div
									className={`py-2 text-center text-xs font-medium ${getHeaderTextClass(i, 'sub')}`}
								>
									Plan
								</div>
								<div
									className={`py-2 text-center text-xs font-medium ${getHeaderTextClass(i, 'sub')}`}
								>
									Fact
								</div>
							</div>
						</div>
					</th>
				))}

				<th
					scope='col'
					aria-label='Actions'
					className='w-12 border-l border-gray-200 p-0'
				/>
			</tr>
		</thead>
	)
}
