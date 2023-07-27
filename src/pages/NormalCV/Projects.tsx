import React from 'react'
import {BiSquare} from 'react-icons/bi'

type Props = {
	name: string
	technologies: string
	description: string
	contribution: string
}

const Projects: React.FC<Props> = ({
	name,
	technologies,
	description,
	contribution,
}) => {
	return (
		<div className="my-4 xl:my-6">
			<h3 className="font-bold capitalize text-cyan-700 xl:text-xl ">
				{name}
			</h3>
			<div className="text-sm xl:text-base">
				<div className="my-2 flex items-start">
					<div className="mr-2 mt-1 text-cyan-700 xl:mx-3">
						<BiSquare />
					</div>
					<p className="text-justify">
						<span className="font-bold">Technologies used: </span>
						{technologies}
					</p>
				</div>
				<div className="my-2 flex items-start">
					<div className="mr-2 mt-1 text-cyan-700 xl:mx-3">
						<BiSquare />
					</div>
					<p className="text-justify">
						<span className="font-bold">Description: </span>
						{description}
					</p>
				</div>
				<div className="my-2 flex items-start">
					<div className="mr-2 mt-1 text-cyan-700 xl:mx-3">
						<BiSquare />
					</div>
					<p className="text-justify">
						<span className="font-bold">Contribution: </span>
						{contribution}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Projects
