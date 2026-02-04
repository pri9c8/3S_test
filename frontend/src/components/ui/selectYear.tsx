import { ChevronDown } from '@icon'
import type { FC, KeyboardEvent, MouseEvent, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

interface Option {
	value: string
	label: string
	icon?: ReactNode
}

interface SelectYearProps {
	options: Option[]
	value: string
	onChange: (value: string) => void
	placeholder?: string
	className?: string
	label?: string
	dropdownIcon?: ReactNode
}

export const SelectYear: FC<SelectYearProps> = ({
	options,
	value,
	onChange,
	placeholder = 'Select year',
	className = '',
	label = 'Year',
	dropdownIcon,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const selectRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside as any)
		return () =>
			document.removeEventListener('mousedown', handleClickOutside as any)
	}, [])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				setIsOpen(false)
				event.stopPropagation()
			}
		}
		document.addEventListener('keydown', handleKeyDown as any)
		return () => document.removeEventListener('keydown', handleKeyDown as any)
	}, [isOpen])

	const selectedOption = options.find(opt => opt.value === value)
	const displayText = selectedOption?.label || placeholder

	const renderDropdownIcon = () => {
		if (dropdownIcon) {
			return (
				<span
					className={`w-4 h-4 text-gray-500 transition-transform ${
						isOpen ? 'rotate-180' : ''
					}`}
					aria-hidden='true'
				>
					{dropdownIcon}
				</span>
			)
		}
		return (
			<ChevronDown
				className={`w-4 h-4 text-gray-500 transition-transform ${
					isOpen ? 'rotate-180' : ''
				}`}
				aria-hidden='true'
			/>
		)
	}

	return (
		<div ref={selectRef} className={`relative inline-block ${className}`}>
			<button
				type='button'
				onClick={() => setIsOpen(!isOpen)}
				aria-haspopup='listbox'
				aria-expanded={isOpen}
				aria-label={label}
				className={
					'inline-flex items-center justify-between gap-2 px-3 py-1.5 w-full bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
				}
			>
				<span className='flex items-center gap-2'>
					{selectedOption?.icon && (
						<span className='w-4 h-4'>{selectedOption.icon}</span>
					)}
					{displayText}
				</span>
				{renderDropdownIcon()}
			</button>

			{isOpen && (
				<div
					className={
						'absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none'
					}
					role='listbox'
					aria-labelledby={label}
				>
					{options.map(option => (
						<button
							key={option.value}
							type='button'
							onClick={() => {
								onChange(option.value)
								setIsOpen(false)
							}}
							className={`
                w-full text-left px-3 py-2
                flex items-center gap-2
                ${
									value === option.value
										? 'bg-blue-50 text-blue-700 font-medium'
										: 'text-gray-700 hover:bg-gray-100'
								}
                transition-colors
                focus:outline-none focus:bg-gray-100
              `}
							role='option'
							aria-selected={value === option.value}
						>
							{option.icon && <span className='w-4 h-4'>{option.icon}</span>}
							{option.label}
						</button>
					))}
				</div>
			)}
		</div>
	)
}
