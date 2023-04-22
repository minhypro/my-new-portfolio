import {FC} from 'react'

import Avatar from '../../components/ui/Avatar'

const CVHeader: FC = () => {
	return (
		<div className="flex">
			<div className="basis-1/4">
				<Avatar />
			</div>
			<div className="basis-3/4 bg-cyan-800 p-6 text-white">
				<h1 className="text-6xl font-semibold">Minh Y (Mike) Le</h1>
				<h3 className="mb-4 mt-2 text-2xl">Web Developer</h3>
				<p>
					Frontend web developer with nearly 2 years of experience
					contributing primarily to the frontend side of projects.
					Skilled in React framework, creating reusable components,
					and building libraries. Expertise in creating efficient,
					scalable, and responsive web applications with a strong
					understanding of HTML, CSS, and JavaScript. Passionate about
					writing clean, maintainable code and working collaboratively
					with designers and back-end developers to deliver seamless
					user experiences.
				</p>
				{/*  Seeking to apply my skills and experience
					to a challenging role in frontend web development */}
			</div>
		</div>
	)
}

export default CVHeader
