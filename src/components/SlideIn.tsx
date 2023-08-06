import {motion, useAnimation, useInView, Variants} from 'framer-motion'
import React from 'react'

interface Props {
	children: React.ReactNode
	width?: 'fit-content' | '100%'
	from?: 'top' | 'bottom' | 'left' | 'right'
}

export const SlideIn: React.FC<Props> = ({
	children,
	width = 'fit-content',
	from = 'bottom',
}) => {
	const ref = React.useRef(null)
	const isInView = useInView(ref, {once: true})
	const mainControls = useAnimation()

	React.useEffect(() => {
		if (isInView) {
			mainControls.start('visible')
		}
	}, [isInView])

	const variants = new Map<string, Variants>()
	variants.set('top', {
		hidden: {y: -50, opacity: 0},
		visible: {y: 0, opacity: 1},
	})
	variants.set('bottom', {
		hidden: {y: 50, opacity: 0},
		visible: {y: 0, opacity: 1},
	})
	variants.set('left', {
		hidden: {x: -250, opacity: 0},
		visible: {x: 0, opacity: 1},
	})
	variants.set('right', {
		hidden: {x: 250, opacity: 0},
		visible: {x: 0, opacity: 1},
	})

	return (
		<div
			ref={ref}
			style={{position: 'relative', width, overflow: 'hidden'}}
		>
			<motion.div
				variants={variants.get(from)}
				initial="hidden"
				animate={mainControls}
				transition={{duration: 0.5, delay: 0.25}}
			>
				{children}
			</motion.div>
		</div>
	)
}
