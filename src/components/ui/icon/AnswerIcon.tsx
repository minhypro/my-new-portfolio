import {FC} from 'react'

type IconProps = {
	correct?: boolean
	listening?: boolean
}

export const AnswerIcon: FC<IconProps> = ({correct, listening}) => {
	const Correct = () => (
		<svg
			className="inline-block h-8 w-8 text-green-500"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	)
	const Wrong = () => (
		<svg
			className="inline-block h-8 w-8 text-red-500"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			{' '}
			<circle cx={12} cy={12} r={10} />{' '}
			<line x1={15} y1={9} x2={9} y2={15} />{' '}
			<line x1={9} y1={9} x2={15} y2={15} />
		</svg>
	)

	const Listening = () => (
		<svg
			className="inline-block h-8 w-8 animate-pulse text-blue-700"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			{' '}
			<path stroke="none" d="M0 0h24v24H0z" />{' '}
			<rect x={9} y={2} width={6} height={11} rx={3} />{' '}
			<path d="M5 10a7 7 0 0 0 14 0" />{' '}
			<line x1={8} y1={21} x2={16} y2={21} />{' '}
			<line x1={12} y1={17} x2={12} y2={21} />
		</svg>
		// <svg
		// 	className="inline-block h-8 w-8 animate-pulse text-blue-500"
		// 	width={24}
		// 	height={24}
		// 	viewBox="0 0 24 24"
		// 	strokeWidth={2}
		// 	stroke="currentColor"
		// 	fill="none"
		// 	strokeLinecap="round"
		// 	strokeLinejoin="round"
		// >
		// 	{' '}
		// 	<path stroke="none" d="M0 0h24v24H0z" />{' '}
		// 	<path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{' '}
		// 	<line x1={12} y1={11} x2={12} y2="11.01" />{' '}
		// 	<line x1={8} y1={11} x2={8} y2="11.01" />{' '}
		// 	<line x1={16} y1={11} x2={16} y2="11.01" />
		// </svg>
	)

	return listening ? <Listening /> : correct ? <Correct /> : <Wrong />
}
