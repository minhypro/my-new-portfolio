import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion'
import {useContext, useEffect, useRef, useState} from 'react'
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {BsDownload} from 'react-icons/bs'

import {StateContext} from '@/context/globalState'

import ToolTip from '../../components/ui/Tooltip'

export const FloatingSidebar: React.FC = () => {
	const {isAdvanced, isAdvancedToggle} = useContext(StateContext)
	const scroll = useScroll()
	const ref = useRef<HTMLDivElement>(null)
	const [position, setPosition] = useState({
		x: 0,
		y: window.innerHeight / 2.5,
	})

	useMotionValueEvent(scroll.scrollY, 'change', latest => {
		setPosition(prev => {
			const newYPosition = latest + window.innerHeight / 2.5
			return {x: prev.x, y: newYPosition}
		})
	})

	const [shouldDisplay, setShouldDisplay] = useState(false)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShouldDisplay(true)
		}, 1000)
		return () => clearTimeout(timeoutId)
	}, [])

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})

		isAdvancedToggle()
		setShouldDisplay(prev => !prev)
	}

	useEffect(() => {
		if (!isAdvanced) return setShouldDisplay(true)
	}, [isAdvanced])

	return (
		<>
			<AnimatePresence>
				{shouldDisplay && (
					<motion.div
						ref={ref}
						initial={{
							opacity: 0,
							scale: 0.5,
							x: -200,
							y: position.y,
						}}
						animate={{
							opacity: 1,
							scale: 1,
							x: position.x,
							y: position.y,
						}}
						transition={{duration: 0.7}}
						className={`absolute right-0 top-0 flex flex-col`}
						exit={{x: -300, opacity: 0}}
					>
						<ToolTip tooltip="Download CV">
							<a
								className="inline-block cursor-pointer rounded-full bg-sky-500 p-3 text-white"
								href="main_cv.pdf"
								download="Minh Y Le - Web Developer.pdf"
							>
								<BsDownload />
							</a>
						</ToolTip>
						<ToolTip tooltip="Download CV">
							<button
								className="block cursor-pointer rounded-full bg-sky-500 p-3 text-white"
								onClick={handleClick}
							>
								<AiOutlineCodeSandbox />
							</button>
						</ToolTip>
					</motion.div>
				)}
			</AnimatePresence>
			{/* <div className="flex flex-row gap-1">
				<a
					className="inline-block cursor-pointer rounded-full bg-sky-500 p-3 text-white"
					href="main_cv.pdf"
					download="Minh Y Le - Web Developer.pdf"
				>
					<BsDownload />
				</a>
				<button
					className="block cursor-pointer rounded-full bg-sky-500 p-3 text-white"
					onClick={handleClick}
				>
					<AiOutlineCodeSandbox />
				</button>
			</div> */}
		</>
	)
}
