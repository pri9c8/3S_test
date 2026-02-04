import type { FC, ReactNode } from 'react'

interface AddButtonProps {
	onClick: () => void
	className?: string
	label?: string
	icon?: ReactNode
}

export const AddButton: FC<AddButtonProps> = ({
	onClick,
	className = '',
	icon,
	label = 'Add plan',
}) => {
	const baseButtonClass = `
 inline-flex items-center gap-2 px-3 py-1.5
    bg-blue-800 text-white
    border border-blue-800
    rounded-md
    hover:bg-blue-700 hover:border-blue-700
    transition-colors
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `.trim()

	return (
		<div className='mt-3.5'>
			<button
				onClick={onClick}
				aria-label={label}
				className={className || baseButtonClass}
			>
				{icon && <span className='w-4 h-4'>{icon}</span>}
				<span>{label}</span>
			</button>
		</div>
	)
}
