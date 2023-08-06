import {useInView} from 'framer-motion'
import React, {useRef} from 'react'

import {Reveal} from '@/components/Reveal'
import {Smile, Terminal} from '@/components/ui/icon'
import {Tag} from '@/components/ui/Tag'
import {useTabNavigation} from '@/context/sidebarNavigation'

export const AboutSection: React.FC = () => {
	const setActiveTab = useTabNavigation(state => state.setActiveTab)
	const ref = useRef(null)
	const isInView = useInView(ref, {margin: '-100px', amount: 0.2})

	React.useEffect(() => {
		if (!isInView) return
		setActiveTab(1)
	}, [isInView])

	return (
		<div id="about" className="md:pb-24" ref={ref}>
			<div className="flex items-center gap-4 xl:gap-10">
				<h2
					id="overview"
					className="xs:text-[50px] mt-2 text-[40px] font-black text-white sm:text-[60px] lg:text-[80px] lg:leading-[98px]"
				>
					<Reveal>About.</Reveal>
				</h2>
				<div className="h-px w-full bg-slate-400" />
			</div>
			<div className="mb-14 md:grid md:grid-cols-[0.4fr_0.6fr] md:gap-4">
				<div className="md:my-8">
					<Reveal>
						<p className="my-4">
							I've spent the last 3 years building and scaling
							software for some pretty cool companies.
						</p>
					</Reveal>
					<Reveal>
						<p className="my-4">
							I'm currently on the lookout for new opportunities
							that will allow me to gain fresh experiences in
							different environments.
						</p>
					</Reveal>
					<Reveal>
						<p className="my-4">
							I believe that stepping out of my comfort zone will
							help me grow both personally and professionally
						</p>
					</Reveal>
				</div>
				<div className="text-right">
					<div className="my-10">
						<div className="my-4 flex gap-2">
							<Reveal>
								<div className="w-6 text-primary">
									<Terminal />
								</div>
							</Reveal>
							<Reveal>
								<h3 className="text-xl font-semibold">
									Use at work
								</h3>
							</Reveal>
						</div>

						<Reveal>
							<div className="flex flex-wrap items-center gap-3">
								<Tag>Javascript</Tag>
								<Tag>Typescript</Tag>
								<Tag>HTML</Tag>
								<Tag>CSS</Tag>
								<Tag>React</Tag>
								<Tag>Redux</Tag>
								<Tag>Zustand</Tag>
								<Tag>Tailwind</Tag>
								<Tag>Git</Tag>
								<Tag>MongoDB</Tag>
								<Tag>NodeJS</Tag>
								<Tag>Nest</Tag>
								<Tag>Clickup</Tag>
							</div>
						</Reveal>
					</div>
					<div className="my-10">
						<Reveal>
							<div className="my-4 flex gap-2">
								<div className="w-6 text-primary">
									<Smile />
								</div>
								<h3 className="text-xl font-semibold">
									Use at home
								</h3>
							</div>
						</Reveal>
						<Reveal>
							<div className="flex flex-wrap gap-3">
								<Tag>NextJs</Tag>
								<Tag>ThreeJS</Tag>
								<Tag>GSAP</Tag>
								<Tag>VueJs</Tag>
								<Tag>Angular</Tag>
								<Tag>Golang</Tag>
								<Tag>Python</Tag>
								<Tag>AWS</Tag>
								<Tag>GraphQL</Tag>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</div>
	)
}
