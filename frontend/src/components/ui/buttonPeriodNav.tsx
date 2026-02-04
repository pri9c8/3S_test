import type { FC, ReactNode } from 'react'

interface ButtonPeriodNavProps {
	onPrev: () => void
	onNext: () => void
	containerClassName?: string
	prevButtonClassName?: string
	nextButtonClassName?: string
	prevLabel?: string
	nextLabel?: string
	prevIcon?: ReactNode
	nextIcon?: ReactNode
}

export const ButtonPeriodNav: FC<ButtonPeriodNavProps> = ({
	onPrev,
	onNext,
	containerClassName = '',
	prevButtonClassName,
	nextButtonClassName,
	prevLabel = 'Prev',
	nextLabel = 'Next',
	prevIcon,
	nextIcon,
}) => {
	const baseButtonClass = `
    px-4 py-2 bg-white border border-gray-300 rounded-md 
    hover:bg-gray-100 transition-colors 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    flex items-center gap-2
  `.trim()

	return (
		<div className={containerClassName || 'flex gap-2 m-4'}>
			<button
				onClick={onPrev}
				aria-label={prevIcon ? prevLabel : undefined}
				className={prevButtonClassName || baseButtonClass}
			>
				{prevIcon && <span className='w-4 h-4 text-gray-700 '>{prevIcon}</span>}
				{!prevIcon && prevLabel}
			</button>
			<button
				onClick={onNext}
				aria-label={nextIcon ? nextLabel : undefined}
				className={nextButtonClassName || baseButtonClass}
			>
				{!nextIcon && nextLabel}
				{nextIcon && <span className='w-4 h-4 text-gray-700'>{nextIcon}</span>}
			</button>
		</div>
	)
}
