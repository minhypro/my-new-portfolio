import {FC} from 'react'

import Avatar from '../../components/ui/Avatar'

const CVHeader: FC = () => {
	return (
		<div className="flex flex-col lg:flex-row">
			<div className="basis-1/4">
				<Avatar />
			</div>
			<div className="basis-3/4 bg-cyan-800 p-6 text-white">
				<h1 className="text-4xl font-semibold xl:text-6xl">
					Minh Y (Mike) Le
				</h1>
				<h3 className="my-2 text-xl xl:mb-4 xl:text-2xl">
					Web Developer
				</h3>
				<p className="text-justify text-sm xl:text-base">
					Frontend web developer with nearly 2 years of experience
					contributing primarily to the frontend side of projects.
					<br />
					Skilled in React framework, creating reusable components,
					and building libraries. <br />
					Expertise in creating efficient, scalable, and responsive
					web applications with a strong understanding of HTML, CSS,
					and JavaScript. <br />
					Passionate about writing clean, maintainable code and
					working collaboratively with designers and back-end
					developers to deliver seamless user experiences.
				</p>
			</div>
		</div>
	)
}

export default CVHeader
