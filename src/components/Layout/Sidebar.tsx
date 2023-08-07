import {Wand2} from 'lucide-react'
import React, {useContext, useRef, useState} from 'react'

import {StateContext} from '@/context/globalState'
import {useTabNavigation} from '@/context/sidebarNavigation'

import {Tooltip, TooltipContent, TooltipTrigger} from '../ui/Tooltip/Tooltip'

const sidebarTabs = [
	{to: '#home', label: 'M'},
	{to: '#about', label: 'About'},
	{to: '#project', label: 'Project'},
	{to: '#experience', label: 'Experience'},
	{to: '#contact', label: 'Contact'},
]

const Sidebar: React.FC = () => {
	const activeTab = useTabNavigation(state => state.activeTab)
	const setActiveTab = useTabNavigation(state => state.setActiveTab)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const navRefArray = useRef<any[]>([])

	const {isAdvancedToggle} = useContext(StateContext)
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})

		isAdvancedToggle()
	}

	const [tabLine, setTabLine] = useState({top: 0, height: 0})

	React.useEffect(() => {
		const setTabPosition = () => {
			const currentTab = navRefArray.current[activeTab]
			setTabLine({
				top: currentTab.offsetTop,
				height: currentTab.offsetHeight,
			})
		}

		setTabPosition()

		window.addEventListener('resize', setTabPosition)

		return () => window.removeEventListener('resize', setTabPosition)
	}, [activeTab])

	return (
		<div className="sticky top-0 flex h-[100vh] flex-col items-center bg-neutral-950 text-center font-poppins text-xl text-white subpixel-antialiased">
			{sidebarTabs.map((ele, index) => {
				if (index === 0) {
					return (
						<div
							ref={el => (navRefArray.current[index] = el)}
							key={ele.to}
							className="flex cursor-pointer items-center p-4 text-2xl font-bold xl:h-20"
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: 'smooth',
								})
								setTimeout(() => {
									setActiveTab(0)
								}, 500)
							}}
						>
							M
						</div>
					)
				} else {
					return (
						<a
							ref={el => (navRefArray.current[index] = el)}
							key={ele.to}
							href={ele.to}
							onClick={() => {
								setTimeout(() => {
									setActiveTab(index)
								}, 500)
							}}
							className="vertical-rl flex w-full items-center py-4 subpixel-antialiased hover:bg-neutral-900"
						>
							{ele.label}
						</a>
					)
				}
			})}

			<Tooltip>
				<TooltipContent>Try another version</TooltipContent>
				<TooltipTrigger>
					<button
						className="inline-block rotate-90 cursor-pointer p-4"
						onClick={handleClick}
					>
						<Wand2 />
					</button>
				</TooltipTrigger>
			</Tooltip>
			<div
				className="absolute right-0 m-0 block w-[2px] bg-primary transition-all duration-300"
				style={{top: tabLine.top, height: tabLine.height}}
			/>
		</div>
	)
}

export default Sidebar
