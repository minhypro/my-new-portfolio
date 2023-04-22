import {FC} from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {VscGithubAlt} from 'react-icons/vsc'

import {technologies} from '@/constant/technicalConst'

import EnvelopeIcon from '../../components/ui/icon/EnvelopeIcon'
import MapPinIcon from '../../components/ui/icon/MapPinIcon'
import PhoneIcon from '../../components/ui/icon/PhoneIcon'
import SocialLink from '../../components/ui/SocialLink'
import Experience from './Experience'
import Projects from './Projects'

const CVHeader: FC = () => {
	return (
		<div className="flex">
			<div className="relative basis-1/4 pr-6">
				<h2 className="text-2xl font-bold uppercase text-cyan-700">
					Contact
				</h2>
				<div className="absolute w-[80%] border border-cyan-700"></div>
				<SocialLink text="Da Nang, Viet Nam" icon={<MapPinIcon />} />
				<SocialLink text="0785 497 999" icon={<PhoneIcon />} />
				<SocialLink
					text="minhypro"
					link="https://github.com/minhypro"
					icon={<VscGithubAlt className="h-6 w-6" />}
				/>
				<SocialLink
					text="Minh Y (Mike) Le"
					link="https://www.linkedin.com/in/minh-y-le-930118157/"
					icon={<AiOutlineLinkedin className="h-6 w-6" />}
				/>
				<SocialLink
					text="leminhy969@gmail.com"
					link="mailto:leminhy969@gmail.com"
					icon={<EnvelopeIcon />}
				/>
				<h2 className="text-2xl font-bold uppercase text-cyan-700">
					Technical skill
				</h2>
				<div className="absolute w-[80%] border border-cyan-700"></div>
				{technologies.map(element => (
					<div key={element.name} className="mt-6 inline-block">
						<img width={40} className="mx-3" src={element.icon} />
					</div>
				))}
			</div>
			<div className="basis-3/4 p-6 ">
				<div className="relative mb-6">
					<h2 className="text-4xl font-bold uppercase text-cyan-700">
						Work Experience
					</h2>
					<div className="absolute left-[-20px] w-[105%] border border-cyan-700"></div>
				</div>
				<Experience
					company="Techvify Software"
					positions={[
						{
							title: 'Frontend Web Developer',
							timeline: '09/2022 - Now',
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
							title: 'WordPress Web developer',
							timeline: '07/2021 - 07/2022',
							description: [
								'Build landing pages using a combination of WP editor and custom HTML/CSS',
								'Customized and extended WordPress themes and plugins to meet specific project requirements',
								'Provided ongoing support and maintenance for WordPress sites post-launch',
							],
						},
						{
							title: 'Quality Assurance Engineer',
							timeline: '12/2020 - 07/2022',
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
				<div className="relative mb-6">
					<h2 className=" text-4xl font-bold uppercase text-cyan-700">
						Projects
					</h2>
					<div className="absolute left-[-20px] w-[105%] border border-cyan-700"></div>
					<Projects
						name="CRM application - Finnish Client"
						technologies="Typescript, ReactJS, Tailwind, Server-sent Events, Web Workers"
						description="An in-house app designed to manage customer relations, facilitate mechanical equipment specification calculations, and produce related PDF documents."
					/>
					<Projects
						name="Personal finance software - UK Client"
						technologies="Typescript, ReactJS, MUI, Chart.js, Firebase"
						description="A web-application that is the next generation of wealth management, personal finance software, allowing online, real-time money management, and secure multi banking in one place. End user can transfer money, download statements, view reports, search your history, use a net worth calculator, track investments, and more. "
					/>
					<Projects
						name="Thai learning application - Thai Client"
						technologies="Typescript, ReactJS, Tailwind, GSAP, Framer Motion"
						description="A language study app offers a variety of exercises and interactive lessons, as well as quizzes and games to enhance vocabulary, pronunciation, reading, and writing skills."
					/>
				</div>
			</div>
		</div>
	)
}

export default CVHeader
