import React from 'react'
import {BiSquare} from 'react-icons/bi'

type Props = {
	name: string
	technologies: string
	description: string
}

const Projects: React.FC<Props> = ({name, technologies, description}) => {
	return (
		<div className="my-6 ">
			<h3 className="text-xl font-bold capitalize text-cyan-700 ">
				{name}
			</h3>
			<div>
				<div className="my-2 flex items-center">
					<div className="mx-3 text-cyan-700">
						<BiSquare />
					</div>
					<p className="text-justify">
						<span className="font-bold">Technologies used: </span>
						{technologies}
					</p>
				</div>
				<div className="my-2 flex items-center">
					<div className="mx-3 text-cyan-700">
						<BiSquare />
					</div>
					<p className="text-justify">
						<span className="font-bold">Description: </span>
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Projects
