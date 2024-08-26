import {AnimatePresence, motion, Variants} from 'framer-motion'
import {FC, useContext, useEffect, useRef, useState} from 'react'
import {useWindowSize} from 'usehooks-ts'

import {StateContext} from '@/context/globalState'
import {getCurrentWidth} from '@/utils/utils'
import {differenceInYears} from '@/utils/yearToNow'

import Avatar from '../../components/ui/Avatar'

const CVHeader: FC = () => {
	const {isAdvanced} = useContext(StateContext)
	const [animationVariant, setAnimationVariant] = useState('first')
	const avatarRef = useRef<HTMLDivElement>(null)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const {width: _} = useWindowSize()
	const [, currentContainer] = getCurrentWidth()
	const xToMove =
		currentContainer / 2 -
		(avatarRef.current ? avatarRef.current.clientWidth / 2 : 0)

	const variants: Variants = {
		initial: {
			x: 0,
			y: 0,
		},
		second: {
			x: xToMove,
		},
		third: {
			x: xToMove,
			scale: 1.2,
		},
	}

	const animateStart = () => {
		setAnimationVariant('third')
	}

	useEffect(() => {
		if (isAdvanced && currentContainer > 768) {
			animateStart()
		} else {
			setAnimationVariant('initial')
		}
	}, [isAdvanced, currentContainer])

	return (
		<div className="grid grid-cols-1 dark:mt-10 lg:grid-cols-[0.25fr_0.75fr]">
			<motion.div
				variants={variants}
				animate={animationVariant}
				ref={avatarRef}
				transition={{duration: 1, ease: 'linear'}}
			>
				<div className="basis-1/4">
					<Avatar />
				</div>
			</motion.div>
			<AnimatePresence>
				{isAdvanced ? null : (
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{duration: 0.7}}
						exit={{x: 300, opacity: 0}}
					>
						<div className="basis-3/4 bg-cyan-800 p-6 text-white">
							<h1 className="text-4xl font-semibold xl:text-6xl">
								Minh Y (Mike) Le
							</h1>
							<h3 className="my-2 text-xl xl:mb-4 xl:text-2xl">
								Web Developer
							</h3>
							<p className="text-justify text-sm xl:text-base">
								Frontend web developer with {differenceInYears}{' '}
								years of experience contributing primarily to
								the frontend side of projects.
								<br />
								Skilled in React framework, creating reusable
								components, and building libraries. <br />
								Expertise in creating efficient, scalable, and
								responsive web applications with a strong
								understanding of HTML, CSS, and JavaScript.{' '}
								<br />
								Passionate about writing clean, maintainable
								code and working collaboratively with designers
								and back-end developers to deliver seamless user
								experiences.
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default CVHeader
