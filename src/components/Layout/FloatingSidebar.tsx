import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion'
import {Download, Wand2} from 'lucide-react'
import {useContext, useEffect, useRef, useState} from 'react'
import {useWindowSize} from 'usehooks-ts'

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/Tooltip/Tooltip'
import {StateContext} from '@/context/globalState'
import {useTabNavigation} from '@/context/sidebarNavigation'

export const FloatingSidebar: React.FC = () => {
	const {isAdvanced, isAdvancedToggle} = useContext(StateContext)
	const setActiveTab = useTabNavigation(state => state.setActiveTab)
	const scroll = useScroll()
	const ref = useRef<HTMLDivElement>(null)
	const {width} = useWindowSize()

	const mediaBreakpoints = 1500
	const positionX = width >= mediaBreakpoints ? 48 : -4
	const [position, setPosition] = useState({
		x: positionX,
		y: window.innerHeight / 2.5,
	})

	useMotionValueEvent(scroll.scrollY, 'change', latest => {
		setPosition(() => {
			const newYPosition = latest + window.innerHeight / 2.5
			return {x: positionX, y: newYPosition}
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
		setActiveTab(0)
		if (!isAdvanced) return setShouldDisplay(true)
	}, [isAdvanced])

	return (
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
					<Tooltip>
						<TooltipContent>Download CV</TooltipContent>
						<TooltipTrigger>
							<a
								className="inline-block cursor-pointer rounded-full bg-sky-500/75 p-2 text-white transition-colors hover:bg-sky-500"
								href="main_cv.pdf"
								download="Minh Y Le - Web Developer.pdf"
							>
								<Download />
							</a>
						</TooltipTrigger>
					</Tooltip>

					<Tooltip>
						<TooltipContent>Try another version</TooltipContent>
						<TooltipTrigger>
							<button
								className="inline-block cursor-pointer rounded-full bg-sky-500/75 p-2 text-white transition-colors hover:bg-sky-500"
								onClick={handleClick}
							>
								<Wand2 />
							</button>
						</TooltipTrigger>
					</Tooltip>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
