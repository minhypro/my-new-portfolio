import {AnimatePresence, motion} from 'framer-motion'
import React, {useContext} from 'react'

import {StateContext} from '@/context/globalState'

export const textVariant = (delay: number) => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 1.25,
				delay: delay,
			},
		},
	}
}

export const AdvancedCV: React.FC = () => {
	const {isAdvanced, isAdvancedToggle} = useContext(StateContext)
	console.log(isAdvanced)
	return (
		<AnimatePresence>
			<button
				key={'testBtn-tobeRemoved'}
				onClick={() => isAdvancedToggle()}
			>
				Click here
			</button>
			{isAdvanced ? (
				<>
					<motion.div
						// initial={{opacity: 0, y: 200}}
						// animate={{opacity: 1, y: 0}}
						// transition={{duration: 1.7}}
						// exit={{x: 300, opacity: 0}}
						variants={{
							hidden: {
								y: -50,
								opacity: 0,
							},
							show: {
								y: 0,
								opacity: 1,
								transition: {
									type: 'spring',
									duration: 1.25,
									delay: 0,
								},
							},
						}}
					>
						<div className="flex flex-col items-center bg-gradient-to-bl from-pink-400 via-slate-200 to-sky-600 bg-clip-text text-center text-transparent">
							<h1 className="mb-10 text-6xl font-bold">
								Hi there, I&apos;m Mike
							</h1>
						</div>
					</motion.div>
					<motion.div
						initial={{x: 250, opacity: 0}}
						whileInView={{x: 0, opacity: 1}}
						transition={{
							type: 'spring',
							duration: 1.2,
							delay: 0.2,
						}}
						exit={{x: 300, opacity: 0}}
						viewport={{once: true, amount: 0.25}}
					>
						<div className="my-10 flex flex-col items-center bg-gradient-to-bl from-pink-400 via-slate-200 to-sky-600 bg-clip-text text-center text-transparent">
							<h2 className="max-w-4xl py-4 text-4xl font-bold">
								I build modern website and web application.
							</h2>
						</div>
					</motion.div>
					<motion.div
						initial={{x: -250, opacity: 0}}
						whileInView={{x: 0, opacity: 1}}
						transition={{
							type: 'spring',
							duration: 1.2,
							delay: 0.2,
						}}
						exit={{x: 300, opacity: 0}}
						viewport={{once: true, amount: 0.25}}
					>
						<div className="my-10 flex flex-col items-center bg-gradient-to-bl from-pink-400 via-slate-200 to-sky-600 bg-clip-text text-center text-transparent">
							<h2 className="max-w-4xl py-4 text-4xl font-bold">
								I transform your ambitious ideas into reality.
							</h2>
						</div>
					</motion.div>
					<motion.div
						variants={textVariant(0)}
						initial="hidden"
						whileInView="show"
						viewport={{once: true, amount: 0.25}}
					>
						<p className="xs:text-[20px] text-[16px] font-medium text-[#dfd9ff] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">
							Introduction
						</p>
						<h2 className="xs:text-[50px] mt-2 text-[40px] font-black text-white sm:text-[60px] lg:text-[80px] lg:leading-[98px]">
							Overview.
						</h2>
					</motion.div>
					<div className=" h-[2000px]"></div>
				</>
			) : null}
		</AnimatePresence>
	)
}
