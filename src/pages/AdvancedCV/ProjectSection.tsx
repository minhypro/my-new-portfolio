import {useInView} from 'framer-motion'
import React, {useRef} from 'react'

import {Reveal} from '@/components/Reveal'
import {Tag} from '@/components/ui/Tag'
import {useTabNavigation} from '@/context/sidebarNavigation'

export const ProjectSection: React.FC = () => {
	const setActiveTab = useTabNavigation(state => state.setActiveTab)
	const ref = useRef(null)
	const isInView = useInView(ref, {margin: '-100px', amount: 0.2})

	React.useEffect(() => {
		if (!isInView) return
		setActiveTab(2)
	}, [isInView])
	return (
		<div
			id="project"
			className="pb-32"
			onFocus={() => console.log('project focused')}
			ref={ref}
		>
			<div className="flex flex-row-reverse items-center gap-4 xl:gap-10">
				<h2
					id="overview"
					className="xs:text-[50px] mt-2 text-[40px] font-black text-white sm:text-[60px] lg:text-[80px] lg:leading-[98px]"
				>
					<Reveal>Project.</Reveal>
				</h2>
				<div className="h-px w-full bg-slate-400" />
			</div>
			<Reveal>
				<p className="my-4">
					I am currently handling outsourced projects for multiple
					clients with great efficiency and effectiveness.
				</p>
			</Reveal>

			<div className="my-10">
				<div className="my-4 gap-2">
					<Reveal>
						<div className="text-primary">Netherlands Client</div>
					</Reveal>
					<Reveal>
						<h3 className="text-xl font-semibold">
							Recornect products
						</h3>
					</Reveal>
					<Reveal>
						<p className="my-4">
							Worked on changing an on-premise solution into a
							digital one for people with mental health
							challenges. This project involved creating a web
							app, desktop app, and mobile app to make sure the
							solution was easy to use on different platforms.
						</p>
					</Reveal>
				</div>

				<Reveal>
					<div className="flex flex-wrap items-center gap-3">
						<Tag>Typescript</Tag>
						<Tag>ReactJS</Tag>
						<Tag>Tailwind</Tag>
						<Tag>Shadcn</Tag>
						<Tag>Tanstack libraries</Tag>
						<Tag>SignalR</Tag>
						<Tag>Sipjs</Tag>
						<Tag>Zustand</Tag>
						<Tag>PWA</Tag>
						<Tag>ElectronJS</Tag>
						<Tag>WebPush</Tag>
					</div>
				</Reveal>
			</div>

			<div className="my-10">
				<div className="my-4 gap-2">
					<Reveal>
						<div className="text-primary">Korean Client</div>
					</Reveal>
					<Reveal>
						<h3 className="text-xl font-semibold">
							Dichoi solution – Booking platform
						</h3>
					</Reveal>
					<Reveal>
						<p className="my-4">
							Booking Management Dashboard designed to handle
							reservations, manage property availability, and
							coordinate schedules. Features include real-time
							chat for seamless communication and tools to manage
							people, properties, and bookings efficiently
						</p>
					</Reveal>
				</div>

				<Reveal>
					<div className="flex flex-wrap items-center gap-3">
						<Tag>Typescript</Tag>
						<Tag>ReactJS</Tag>
						<Tag>Tailwind</Tag>
						<Tag>Antd</Tag>
						<Tag>Redux</Tag>
						<Tag>Firebase</Tag>
					</div>
				</Reveal>
			</div>

			<div className="my-10">
				<div className="my-4 gap-2">
					<Reveal>
						<div className="text-primary">Finnish Client</div>
					</Reveal>
					<Reveal>
						<h3 className="text-xl font-semibold">
							CRM And CPQ Application
						</h3>
					</Reveal>
					<Reveal>
						<p className="my-4">
							In-house apps CRM (Customer-relation-management) and
							CPQ (Configure, price and quote) designed to manage
							customer relations, facilitate mechanical equipment
							specification calculations, and produce related PDF
							documents.
						</p>
					</Reveal>
				</div>

				<Reveal>
					<div className="flex flex-wrap items-center gap-3">
						<Tag>ReactJS</Tag>
						<Tag>Typescript</Tag>
						<Tag>Tailwind</Tag>
						<Tag>Server-sent Events</Tag>
						<Tag>Web Workers</Tag>
						<Tag>Zustand</Tag>
						<Tag>Tanstack libraries</Tag>
						<Tag>Clickup</Tag>
					</div>
				</Reveal>
			</div>

			<div className="my-10">
				<div className="my-4 gap-2">
					<Reveal>
						<div className="text-primary">UK Client</div>
					</Reveal>
					<Reveal>
						<h3 className="text-xl font-semibold">
							Personal Finance Software
						</h3>
					</Reveal>
					<Reveal>
						<p className="my-4">
							A web application that is the next generation of
							wealth management, and personal finance software,
							allowing online, real-time money management, and
							secure multi-banking in one place. End users can
							transfer money, download statements, view reports,
							search their history, use a net worth calculator,
							track investments, and more.
						</p>
					</Reveal>
				</div>
				<Reveal>
					<div className="flex flex-wrap items-center gap-3">
						<Tag>ReactJS</Tag>
						<Tag>Typescript</Tag>
						<Tag>MUI</Tag>
						<Tag>Rechart</Tag>
						<Tag>Firebase</Tag>
						<Tag>Redux</Tag>
						<Tag>Jira</Tag>
					</div>
				</Reveal>
			</div>
		</div>
	)
}
