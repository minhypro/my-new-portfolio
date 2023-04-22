import {FC} from 'react'

type IconProps = {
	speaking?: boolean
	listening?: boolean
}

export const MicrophoneIcon: FC<IconProps> = ({speaking, listening}) => {
	const Listening = () => (
		<svg
			className="inline-block h-8 w-8 text-blue-500"
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
	)

	const Speaking = () => (
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
	)

	const Microphone = () => (
		<svg
			className="inline-block h-8 w-8 text-black"
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
	)

	return speaking ? <Speaking /> : listening ? <Listening /> : <Microphone />
}
