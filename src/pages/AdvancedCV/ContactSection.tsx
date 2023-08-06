import {useInView} from 'framer-motion'
import React, {useRef} from 'react'

import {Reveal} from '@/components/Reveal'
import EnvelopeIcon from '@/components/ui/icon/EnvelopeIcon'
import {useTabNavigation} from '@/context/sidebarNavigation'

export const ContactSection: React.FC = () => {
	const setActiveTab = useTabNavigation(state => state.setActiveTab)
	const ref = useRef(null)
	const isInView = useInView(ref, {margin: '-70px', amount: 0.5})

	React.useEffect(() => {
		if (!isInView) return
		setActiveTab(4)
	}, [isInView])
	return (
		<div
			id="contact"
			className="mb-52 mt-20 flex flex-col justify-center text-center md:mb-80 md:mt-48"
			ref={ref}
		>
			<Reveal width="100%">
				<h3 className="my-8 text-5xl font-bold">Contact.</h3>
				<p className="font-light">
					Shoot me an email if you want to connect! You can also find
					me on{' '}
					<a
						href="https://www.linkedin.com/in/leminhy/"
						className="text-sky-400 hover:underline"
						target="_blank"
						rel="noreferrer"
					>
						Linkedin
					</a>{' '}
					or{' '}
					<a
						href="https://www.facebook.com/minhy95"
						className="text-sky-400 hover:underline"
						target="_blank"
						rel="noreferrer"
					>
						Facebook
					</a>{' '}
					if that's more your speed.
				</p>
			</Reveal>
			<Reveal width="100%">
				<div className="my-8 flex items-center justify-center gap-2 text-xl hover:text-primary">
					<EnvelopeIcon />
					<a href="mailto:leminhy969@gmail.com">
						leminhy969@gmail.com
					</a>
				</div>
			</Reveal>
		</div>
	)
}
