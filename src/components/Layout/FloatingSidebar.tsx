import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion'
import {FileText, Wand2} from 'lucide-react'
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
	const {isAdvancedToggle} = useContext(StateContext)
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
	const [showAdvancedTooltip, setShowAdvancedTooltip] = useState(false)

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
		const timeoutId = setInterval(() => {
			setShowAdvancedTooltip(true)
		}, 5555)
		return () => clearTimeout(timeoutId)
	}, [])

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
						<TooltipContent>Resume</TooltipContent>
						<TooltipTrigger>
							<a
								className="inline-block cursor-pointer rounded-full bg-sky-500/75 p-2 text-white transition-colors hover:bg-sky-500"
								href="MinhYLe_FE_Developer.pdf"
								target="_blank"
								rel="noreferrer"
							>
								<FileText />
							</a>
						</TooltipTrigger>
					</Tooltip>

					<Tooltip placement="bottom" open={showAdvancedTooltip}>
						<TooltipContent className="animate-pulse">
							Try another version
						</TooltipContent>
						<TooltipTrigger>
							<button
								onMouseOver={() => setShowAdvancedTooltip(true)}
								onMouseLeave={() =>
									setShowAdvancedTooltip(false)
								}
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
