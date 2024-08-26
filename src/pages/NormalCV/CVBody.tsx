import {AnimatePresence, motion} from 'framer-motion'
import {FC, useContext} from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {VscGithubAlt} from 'react-icons/vsc'

import {technologies} from '@/constant/technicalConst'
import {StateContext} from '@/context/globalState'

import EnvelopeIcon from '../../components/ui/icon/EnvelopeIcon'
import MapPinIcon from '../../components/ui/icon/MapPinIcon'
import PhoneIcon from '../../components/ui/icon/PhoneIcon'
import SocialLink from '../../components/ui/SocialLink'
import Experience from './Experience'
import Projects from './Projects'

export const CVBody: FC = () => {
	const {isAdvanced} = useContext(StateContext)

	const renderLeftHeading = (text: string) => (
		<>
			<h2 className="text-2xl font-bold uppercase text-cyan-700">
				{text}
			</h2>
			<div className="absolute w-full border border-cyan-700 lg:w-[80%]"></div>
		</>
	)

	const renderRightHeading = (text: string) => (
		<>
			<h2 className="text-2xl font-bold uppercase text-cyan-700 xl:text-4xl">
				{text}
			</h2>
			<div className="absolute w-full border border-cyan-700 xl:left-[-20px] xl:w-[105%]"></div>
		</>
	)

	return (
		<AnimatePresence>
			{isAdvanced ? null : (
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{duration: 0.7}}
					exit={{y: 300, opacity: 0}}
				>
					<div className="relative flex flex-col-reverse lg:flex-row">
						<div className="relative basis-1/4 xl:pr-6">
							<div className="my-4 xl:my-6">
								{renderLeftHeading('Contact')}
								<div className="flex flex-wrap xl:block">
									<SocialLink
										text="Da Nang, Viet Nam"
										icon={<MapPinIcon />}
									/>
									<SocialLink
										text="0785 497 999"
										icon={<PhoneIcon />}
									/>
									<SocialLink
										text="minhypro"
										link="https://github.com/minhypro"
										icon={
											<VscGithubAlt className="h-6 w-6" />
										}
									/>
									<SocialLink
										text="Minh Y (Mike) Le"
										link="https://www.linkedin.com/in/minh-y-le-930118157/"
										icon={
											<AiOutlineLinkedin className="h-6 w-6" />
										}
									/>
									<SocialLink
										text="leminhy969@gmail.com"
										link="mailto:leminhy969@gmail.com"
										icon={<EnvelopeIcon />}
									/>
								</div>
							</div>
							<div className="my-4 xl:my-6">
								{renderLeftHeading('Technical skill')}
								{technologies.map(element => (
									<div
										key={element.name}
										className="mt-6 inline-block"
									>
										<img
											width={40}
											className="mx-3"
											src={element.icon}
										/>
									</div>
								))}
							</div>
							<div className="my-4 xl:my-6">
								{renderLeftHeading('Soft skill')}
								<div className="my-2 break-words">
									{[
										'Self-learning',
										'Time Management',
										'Communication',
										'Adaptability',
										'Problem-solving',
										'Teamwork',
										'Attention to Detail',
										'Confidence',
									].map((e, i) => (
										<span
											key={i}
											className="mb-2 mr-2 inline-block rounded bg-cyan-700 px-2 text-sm text-white xl:text-base"
										>
											{e}
										</span>
									))}
								</div>
							</div>
							<div className="my-4 xl:my-6">
								{renderLeftHeading('Languages')}
								<div className="my-2 break-words text-sm xl:text-base">
									{[
										{
											lang: 'Vietnamese',
											level: 'Native speaker',
										},
										{
											lang: 'English',
											level: 'Upper-intermediate',
										},
										{lang: 'Thai', level: 'Advanced'},
									].map((e, i) => (
										<p key={i} className="mb-2">
											<span className="font-semibold">
												{e.lang}:{' '}
											</span>
											<span>{e.level}</span>
										</p>
									))}
								</div>
							</div>
						</div>
						<div className="mt-6 basis-3/4 xl:mt-0 xl:p-6 ">
							<div className="relative xl:mb-6">
								{renderRightHeading('Work Experience')}
								<Experience
									company="Techsoft Technology"
									positions={[
										{
											title: 'Frontend Developer',
											timeline: 'Nov 2023 - Now',
											description: [
												'Collaborated closely with EU market partners to develop tailored solutions that meet business and user needs.',
												'Established coding conventions, project structure, and development standards to ensure team consistency and efficiency',
												'Ensured high-quality, maintainable code by actively participating in code reviews and adhering to industry best practices.',
											],
										},
									]}
								/>
								<Experience
									company="Techvify Software"
									positions={[
										{
											title: 'Frontend Developer',
											timeline: 'Sep 2022 - Oct 2023',
											description: [
												'Offshore developer working with English-speaking partners',
												'Collaborated with English-speaking partners to develop high-quality code that met project requirements',
												'Contributed to the development of web applications using HTML, CSS, JavaScript, and React',
												'Built and maintained reusable components and libraries to enhance development efficiency',
												'Ensured code quality and maintainability by participating in code reviews and following best practices',
												'Worked collaboratively with designers and back-end developers to deliver seamless user experiences',
											],
										},
									]}
								/>
								<Experience
									company="Ymese"
									positions={[
										{
											title: 'Frontend Developer',
											timeline: 'Sep 2021 - Sep 2022',
											description: [
												'Build landing pages using a combination of WP editor and custom HTML/CSS',
												'Customized and extended WordPress themes and plugins to meet specific project requirements',
												'Provided ongoing support and maintenance for WordPress sites post-launch',
											],
										},
										{
											title: 'Quality Assurance Engineer',
											timeline: 'Aug 2020 - Sep 2021',
											description: [
												'Multi-tasking and performing various roles as required',
												'Managing a team of three developers and one QC professional',
												"Ensuring the high quality and timely progress of the company's products",
												'Taking ownership of product releases',
												'Creating test plans, test cases, and conducting manual testing',
												'Maintaining, creating, and troubleshooting automation test cases with Cypress',
											],
										},
									]}
								/>
							</div>
							<div className="relative xl:mb-6">
								{renderRightHeading('Highlighted Projects')}
								<Projects
									name="Recornect products - Netherlands Client"
									technologies="Typescript, ReactJS, Tailwind, Shadcn, Zustand, WebPush, Tanstack libraries, SignalR, Sipjs, PWA, ElectronJS"
									description="Worked on changing an on-premise solution into a digital one for people with mental health challenges. This project involved creating a web app, desktop app, and mobile app to make sure the solution was easy to use on different platforms"
									contribution="Researched and chose the right technologies for the project, then created a proof of concept. Led a team of three frontend developers and planned the structure and technology used for the frontend. Set up guidelines and standards to keep the project organized and easy to maintain. Successfully delivered the project, which made the client happy and led to a new, bigger project"
								/>
								<Projects
									name="Dichoi solution: Booking platform - Korean Client"
									technologies="Typescript, ReactJS, Tailwind, Antd, Redux, Firebase"
									description="Booking Management Dashboard designed to handle reservations, manage property availability, and coordinate schedules. Features include real-time chat for seamless communication and tools to manage people, properties, and bookings efficiently."
									contribution="Guided and supported junior developers in task completion, ensuring timely app delivery while maintaining high standards of quality. Consistently met project deadlines and contributed to client satisfaction through effective communication and problem-solving."
								/>
								<Projects
									name="CRM and CPQ Application - Finnish Client"
									technologies="Typescript, ReactJS, Tailwind, Server-sent Events, Web Workers, Zustand, Tanstack libraries"
									description="In-house apps CRM (Customer-relation-management) and CPQ (Configure, price and quote) designed to manage customer relations, facilitate mechanical equipment specification calculations, and produce related PDF documents."
									contribution="Create a brand-new application utilizing a custom-built UI library, employing React, Tailwind, and incorporating suitable headless libraries when necessary. Develop and organize the source code entirely from the ground up."
								/>
								<Projects
									name="Personal Finance Software - UK Client"
									technologies="Typescript, ReactJS, MUI, Rechart, Firebase"
									description="A web application that is the next generation of wealth management, and personal finance software, allowing online, real-time money management, and secure multi-banking in one place. End users can transfer money, download statements, view reports, search their history, use a net worth calculator, track investments, and more."
									contribution="Enhance the application and elevate the user experience, integrate with third-party services. Additionally, customize various charts to effectively present detailed reports."
								/>
								<Projects
									name="Password Protect WordPress Pro - Ymese's Product"
									technologies="WordPress, Php, ReactJS"
									description="A WordPress plugin to protect pages and posts by user roles or with multiple passwords; protect your entire website with a single password."
									contribution="Take on multiple roles and actively participate in various aspects of this project, including product analysis, testing, and coding. Lead the initiative to significantly increase the number of active users from 3,000 to 25,000+."
								/>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
