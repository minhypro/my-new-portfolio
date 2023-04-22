import React from 'react'

type Props = {
	text: string
	icon: React.ReactNode
	link?: string
}

const SocialLink: React.FC<Props> = ({text, link, icon}) => {
	return (
		<div className="my-5 flex w-full items-center">
			<div className="inline-block">{icon}</div>
			<a
				className={`ml-2 ${
					link ? 'text-sky-500 hover:text-sky-400' : ''
				}`}
				href={link}
			>
				{text}
			</a>
		</div>
	)
}

export default SocialLink
