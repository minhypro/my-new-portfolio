import {ReactNode, useRef} from 'react'

interface Props {
	children: ReactNode
	tooltip?: string
}

export default function ToolTip({children, tooltip}: Props) {
	const tooltipRef = useRef<HTMLSpanElement>(null)
	const container = useRef<HTMLDivElement>(null)

	return (
		<div
			ref={container}
			onMouseEnter={({clientX}) => {
				if (!tooltipRef.current || !container.current) return
				const {left} = container.current.getBoundingClientRect()

				tooltipRef.current.style.left = clientX - left + 'px'
			}}
			className="group relative inline-block"
		>
			{children}
			{tooltip ? (
				<span
					ref={tooltipRef}
					className="invisible absolute bottom-full whitespace-nowrap rounded bg-neutral-50/50 p-2 text-gray-500 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:border dark:bg-neutral-900/50 dark:text-white "
				>
					{tooltip}
				</span>
			) : null}
		</div>
	)
}
