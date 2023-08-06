import React, {useContext} from 'react'

import {Reveal} from '@/components/Reveal'
import {SlideIn} from '@/components/SlideIn'
import {Button} from '@/components/ui/Button'
import {StateContext} from '@/context/globalState'

import {AboutSection} from './AboutSection'
import {ContactSection} from './ContactSection'
import {ExperienceSection} from './ExperienceSection'
import {ProjectSection} from './ProjectSection'

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
	const {isAdvanced} = useContext(StateContext)
	return isAdvanced ? (
		<div>
			<div className="px-4 font-poppins text-white md:container md:max-w-3xl">
				<div className="mb-14 min-h-[50vh]">
					<SlideIn width="100%">
						<h1 className="mt-8 text-5xl font-bold">
							Xin chào, I&apos;m Mike
						</h1>
					</SlideIn>
					<SlideIn width="100%" from="left">
						<h2 className="bg-gradient-to-tr from-sky-600 via-sky-400 to-sky-600 bg-clip-text text-right text-xl font-semibold text-transparent md:hidden">
							Web Developer
						</h2>
						<h2 className="mt-10 hidden text-2xl font-semibold md:block">
							I'm a{' '}
							<span className="bg-gradient-to-tr from-sky-600 via-sky-400 to-sky-600 bg-clip-text text-transparent">
								Web Developer
							</span>
						</h2>
					</SlideIn>
					<SlideIn width="100%" from="right">
						<h2 className="mb-10 mt-6 text-xl font-normal md:text-2xl">
							I transform your ambitious ideas into reality.
						</h2>
					</SlideIn>
					<Reveal>
						<div className="md:mt-8">
							<Button>
								<a
									href="mailto:leminhy969@gmail.com"
									className="md:text-xl"
								>
									Contact me
								</a>
							</Button>
						</div>
					</Reveal>
				</div>

				<AboutSection />
				<ProjectSection />
				<ExperienceSection />
				<ContactSection />
			</div>
		</div>
	) : null
}
