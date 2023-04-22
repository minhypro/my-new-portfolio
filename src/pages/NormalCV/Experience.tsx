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
		<div className="my-6 ">
			<h2 className="text-2xl">{company}</h2>
			{positions.map((position, i) => (
				<React.Fragment key={i}>
					<h3 className="text-xl font-bold capitalize text-cyan-700 ">
						{position.title}
					</h3>
					<time className="italic text-cyan-700">
						{position.timeline}
					</time>
					<ul className="my-4">
						{position.description.map((des, index) => (
							<li key={index} className="my-2 flex items-center">
								<div className="mx-3 text-cyan-700">
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
