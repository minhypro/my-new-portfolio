import {useInView} from 'framer-motion'
import React, {useRef} from 'react'

import {Reveal} from '@/components/Reveal'
import {useTabNavigation} from '@/context/sidebarNavigation'

export const ExperienceSection: React.FC = () => {
	const setActiveTab = useTabNavigation(state => state.setActiveTab)
	const ref = useRef(null)
	const isInView = useInView(ref, {margin: '-100px', amount: 0.2})
	// const isInView = useInView(ref, {margin: '-100px 0px 100px 0px', amount: 0.2})

	React.useEffect(() => {
		if (!isInView) return
		setActiveTab(3)
	}, [isInView])
	return (
		<div id="experience" className="mt-10 pb-24" ref={ref}>
			<div className="flex items-center gap-4 xl:gap-10">
				<h2
					id="overview"
					className="xs:text-[50px] mt-2 text-[40px] font-black text-white sm:text-[60px] lg:text-[80px] lg:leading-[98px]"
				>
					<Reveal>Experience.</Reveal>
				</h2>
				<div className="h-px w-full bg-slate-400" />
			</div>

			<div className="my-10 border-b border-neutral-300/10">
				<div className="my-4 gap-2">
					<Reveal width="100%">
						<div className="flex items-center justify-between">
							<h3 className="bg-gradient-to-tr from-sky-700 via-sky-400 to-sky-900 bg-clip-text text-3xl font-bold text-transparent">
								Techvify
							</h3>
							<p className="text-sm md:text-lg">Sep 2022 - Now</p>
						</div>
					</Reveal>
					<Reveal>
						<p className="my-4">
							Engaging in offshore projects worldwide with
							English-speaking partners, I contribute not only to
							enhancing the company's reputation but also to
							assisting others with the Frontend side challenges.
						</p>
					</Reveal>
				</div>
			</div>

			<div className="my-10 border-b border-neutral-300/10">
				<div className="my-4 gap-2">
					<Reveal width="100%">
						<div className="flex items-center justify-between">
							<h3 className="bg-gradient-to-tr from-orange-700 via-orange-400 to-orange-900 bg-clip-text text-3xl font-bold text-transparent">
								Ymese
							</h3>
							<p className="text-sm md:text-lg">
								Aug 2020 - Sep 2022
							</p>
						</div>
					</Reveal>
					<Reveal>
						<p className="my-4">
							A startup company, I embrace multiple roles and
							actively engage in diverse aspects, such as product
							analysis, testing, and coding. Moreover, I take the
							lead in driving a significant initiative to elevate
							the number of active users from 3,000 to an
							impressive 30,000+.
						</p>
					</Reveal>
				</div>
			</div>
		</div>
	)
}
