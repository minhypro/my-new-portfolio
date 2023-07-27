import React from 'react'
import {BiSquare} from 'react-icons/bi'

type Position = {
	title: string
	timeline: string
	description: string[]
}

type Props = {
	company: string
	positions: Position[]
}

const Experience: React.FC<Props> = ({company, positions}) => {
	return (
		<div className="my-4 xl:my-6">
			<h2 className="text-xl xl:text-2xl">{company}</h2>
			{positions.map((position, i) => (
				<React.Fragment key={i}>
					<h3 className="font-bold capitalize text-cyan-700 xl:text-xl ">
						{position.title}
					</h3>
					<time className="text-sm italic text-cyan-700 xl:text-base">
						{position.timeline}
					</time>
					<ul className="my-2 xl:my-4">
						{position.description.map((des, index) => (
							<li
								key={index}
								className="my-2 flex items-start text-sm xl:text-base"
							>
								<div className="mr-2 mt-1 text-cyan-700 xl:mx-3">
									<BiSquare />
								</div>
								<p className="text-justify">{des}</p>
							</li>
						))}
					</ul>
				</React.Fragment>
			))}
		</div>
	)
}

export default Experience
