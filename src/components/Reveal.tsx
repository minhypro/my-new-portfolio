import {motion, useAnimation, useInView} from 'framer-motion'
import React from 'react'

interface Props {
	children: React.ReactNode
	width?: 'fit-content' | '100%'
}

export const Reveal: React.FC<Props> = ({children, width = 'fit-content'}) => {
	const ref = React.useRef(null)
	const isInView = useInView(ref, {once: true})
	const mainControls = useAnimation()
	const slideControls = useAnimation()

	React.useEffect(() => {
		if (isInView) {
			mainControls.start('visible')
			slideControls.start('visible')
		}
	}, [isInView])

	return (
		<div
			ref={ref}
			style={{
				position: 'relative',
				width,
				minHeight: '20px',
				overflow: 'hidden',
			}}
		>
			<motion.div
				variants={{
					hidden: {opacity: 0, y: 75},
					visible: {opacity: 1, y: 0},
				}}
				initial="hidden"
				animate={mainControls}
				transition={{duration: 0.5, delay: 0.25}}
			>
				{children}
			</motion.div>
			<motion.div
				variants={{
					hidden: {left: 0},
					visible: {left: '100%'},
				}}
				initial="hidden"
				animate={slideControls}
				transition={{duration: 0.5, ease: 'easeIn'}}
				style={{
					position: 'absolute',
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					backgroundImage:
						'linear-gradient(rgb(56, 189, 248), #9D00FF)',
					zIndex: 20,
				}}
			/>
		</div>
	)
}
